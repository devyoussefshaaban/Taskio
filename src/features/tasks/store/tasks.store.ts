import { create } from 'zustand';
import { Task } from '../types/task.types';
import { generateId } from '../../../lib/uuid';

interface TasksState {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  addTask: (title: string) => set((state) => ({
    tasks: [...state.tasks, { id: generateId(), title, completed: false, createdAt: Date.now() }]
  })),
  toggleTask: (id: string) => set((state) => ({
    tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  })),
  deleteTask: (id: string) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  }))
}));
