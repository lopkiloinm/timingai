'use client';

import { useTasks } from '../hooks/useTasks';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';

export default function Home() {
  const { tasks, addTask, deleteTask, toggleTask, isLoaded } = useTasks();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <main className="h-[100dvh] bg-gray-50 flex flex-col overflow-hidden">
      <div className="flex-1 w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        <div className="text-center mb-8 flex-shrink-0">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Task Manager</h1>
          <p className="mt-2 text-gray-600">Track your time efficiently.</p>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 relative scroll-smooth">
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
        
        <div className="flex-shrink-0 pt-4 mt-auto bg-gray-50 z-10 pb-safe">
          <TaskInput onAdd={addTask} />
        </div>
      </div>
    </main>
  );
}
