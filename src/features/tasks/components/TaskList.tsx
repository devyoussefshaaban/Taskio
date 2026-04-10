import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { TaskItem } from './TaskItem';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types/task.types';
import { useThemeStore } from '../../../stores/theme.store';

interface TaskListProps {
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onEditTask, onDeleteTask }) => {
  const { tasks, toggleTask } = useTasks();
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  if (tasks.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-8 mt-10">
        <Text className={`text-lg font-medium ${isDark ? 'text-textMuted-dark' : 'text-textMuted-light'}`}>
          No tasks yet
        </Text>
        <Text className={`text-center mt-2 text-sm ${isDark ? 'text-textMuted-dark' : 'text-textMuted-light'}`}>
          Add a task above to get started.
        </Text>
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
