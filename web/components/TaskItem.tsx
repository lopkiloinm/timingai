import { useEffect, useState } from 'react';
import { Play, Square, Trash2 } from 'lucide-react';
import { Task } from '../types';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const formatTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  const [displayTime, setDisplayTime] = useState(task.totalTime);

  useEffect(() => {
    // Update display time immediately when task updates (e.g. stopped/started)
    if (!task.isRunning) {
      setDisplayTime(task.totalTime);
      return;
    }

    // If running, update every second
    const updateTime = () => {
      const now = Date.now();
      const currentElapsed = now - (task.lastStartTime || now);
      setDisplayTime(task.totalTime + currentElapsed);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 200); // Update frequently for responsiveness
    
    return () => clearInterval(interval);
  }, [task.isRunning, task.totalTime, task.lastStartTime]);

  return (
    <div className={`flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border transition-all ${
      task.isRunning 
        ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/50' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      <div className="flex-1 min-w-0 mr-4">
        <h3 className="text-lg font-medium text-gray-900 truncate">{task.title}</h3>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="font-mono text-xl font-semibold text-gray-700 w-20 text-right">
          {formatTime(displayTime)}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggle(task.id)}
            className={`p-2 rounded-lg transition-all ${
              task.isRunning
                ? 'bg-red-100 text-red-600 hover:bg-red-200 hover:scale-105 active:scale-95'
                : 'bg-green-100 text-green-600 hover:bg-green-200 hover:scale-105 active:scale-95'
            }`}
            title={task.isRunning ? 'Stop' : 'Start'}
          >
            {task.isRunning ? <Square size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-red-500 hover:scale-105 active:scale-95 transition-all"
            title="Delete Task"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
