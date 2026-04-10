import React, { useState } from 'react';
import { View } from 'react-native';
import { TaskList, TaskForm, useTasks, Task } from '../../features/tasks';
import { useToastStore } from '../../stores/toast.store';
import { useThemeStore } from '../../stores/theme.store';

export default function TasksScreen() {
  const { addTask, editTask, deleteTask } = useTasks();
  const { showToast } = useToastStore();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSubmit = (title: string) => {
    if (editingTask) {
      editTask(editingTask.id, title);
      setEditingTask(null);
      showToast('Task edited successfully');
    } else {
      addTask(title);
      showToast('Task added successfully');
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleDelete = (id: string) => {
    deleteTask(id);
    showToast('Task deleted successfully');
  };

  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <View className={`flex-1 px-4 pt-6 ${isDark ? 'bg-background-dark' : 'bg-background-light'}`}>
      <TaskForm 
        initialTitle={editingTask?.title}
        submitLabel={editingTask ? 'edit' : 'add'}
        onSubmitForm={handleSubmit}
        onCancel={editingTask ? () => setEditingTask(null) : undefined}
      />
      <TaskList onEditTask={handleEdit} onDeleteTask={handleDelete} />
    </View>
  );
}
