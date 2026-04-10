import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { TaskItem } from './TaskItem';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types/task.types';

interface TaskListProps {
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onEditTask, onDeleteTask }) => {
  const { tasks, toggleTask } = useTasks();

  if (tasks.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-8">
        <Text className="text-textMuted-light dark:text-textMuted-dark text-lg font-medium">No tasks yet</Text>
        <Text className="text-textMuted-light dark:text-textMuted-dark text-center mt-2 text-sm">Add a task above to get started.</Text>
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
          onDelete={onDeleteTask}
          onEdit={onEditTask}
        />
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    />
  );
};
