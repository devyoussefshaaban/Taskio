import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { TaskItem } from './TaskItem';
import { useTasks } from '../hooks/useTasks';

export const TaskList: React.FC = () => {
  const { tasks, toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-slate-400 text-lg font-medium">No tasks yet</Text>
        <Text className="text-slate-400 text-center mt-2 text-sm">Add a task above to get started.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem 
          task={item} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    />
  );
};
