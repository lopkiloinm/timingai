import { useState, useEffect } from 'react';
import { Task } from '../types';

const STORAGE_KEY = 'timingai-tasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse tasks', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (title: string) => {
    // Fallback for environments where crypto.randomUUID is not available (e.g. mobile browsers without secure context)
    const id = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : Date.now().toString(36) + Math.random().toString(36).substr(2);

    const newTask: Task = {
      id,
      title,
      totalTime: 0,
      isRunning: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const stopTask = (task: Task, now: number): Task => {
    if (!task.isRunning) return task;
    const elapsed = now - (task.lastStartTime || now);
    return {
      ...task,
      isRunning: false,
      totalTime: task.totalTime + elapsed,
      lastStartTime: undefined,
    };
  };

  const toggleTask = (id: string) => {
    const now = Date.now();
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          if (task.isRunning) {
            // Stop it
            return stopTask(task, now);
          } else {
            // Start it
            return {
              ...task,
              isRunning: true,
              lastStartTime: now,
            };
          }
        } else {
          // Ensure only one runs at a time
          if (task.isRunning) {
            return stopTask(task, now);
          }
          return task;
        }
      });
    });
  };

  return { tasks, addTask, deleteTask, toggleTask, isLoaded };
};
