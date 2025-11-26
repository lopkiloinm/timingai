import { useState } from 'react';
import { Plus } from 'lucide-react';

interface Props {
  onAdd: (title: string) => void;
}

export const TaskInput = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center bg-white p-4 rounded-xl shadow-lg border border-gray-100">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
      />
      <button
        type="submit"
        disabled={!title.trim()}
        className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
        title="Add Task"
      >
        <Plus size={24} />
      </button>
    </form>
  );
};
