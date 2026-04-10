import React from 'react';
import { View } from 'react-native';
import { TaskList, AddTaskForm, useTasks } from '../../features/tasks';

export default function TasksScreen() {
  const { addTask } = useTasks();

  return (
    <View className="flex-1 bg-slate-50 px-4 pt-4">
      <AddTaskForm onAdd={addTask} />
      <TaskList />
    </View>
  );
}
