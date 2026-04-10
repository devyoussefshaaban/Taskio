import React, { useState } from 'react';
import { View } from 'react-native';
import { TaskList, TaskForm, useTasks, Task } from '../../features/tasks';
import { useToastStore } from '../../stores/toast.store';

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

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark px-4 pt-4">
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
