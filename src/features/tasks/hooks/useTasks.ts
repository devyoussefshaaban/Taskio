import { useTasksStore } from '../store/tasks.store';

export const useTasks = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasksStore();
  
  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    completedTasksCount: tasks.filter(t => t.completed).length,
    totalTasksCount: tasks.length
  };
};
