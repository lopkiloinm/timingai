import { Task } from '../types';
import { TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
        <p className="text-lg">No tasks yet</p>
        <p className="text-sm">Add one below to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 pb-24">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
