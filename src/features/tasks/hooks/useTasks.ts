import { useTasksStore } from '../store/tasks.store';

export const useTasks = () => {
  const { tasks, addTask, editTask, toggleTask, deleteTask } = useTasksStore();
  
  return {
    tasks,
    addTask,
    editTask,
    toggleTask,
    deleteTask,
    completedTasksCount: tasks.filter(t => t.completed).length,
    totalTasksCount: tasks.length
  };
};
