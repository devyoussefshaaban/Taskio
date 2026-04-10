import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeOutUp, Layout } from 'react-native-reanimated';
import { Check, Trash2, Edit2 } from 'lucide-react-native';
import { Task } from '../types/task.types';
import { useThemeStore } from '../../../stores/theme.store';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <Animated.View 
      entering={FadeInDown.duration(400).springify()}
      exiting={FadeOutUp.duration(300)}
      layout={Layout.springify()}
      className={`flex-row items-center justify-between p-4 mb-3 rounded-xl shadow-sm border ${
        isDark 
          ? 'bg-surface-dark border-border-dark' 
          : 'bg-surface-light border-border-light'
      }`}
    >
      <TouchableOpacity 
        onPress={() => onToggle(task.id)}
        className="flex-row items-center flex-1"
      >
        <View 
          className={`w-6 h-6 rounded-full border-2 items-center justify-center mr-3 ${
            task.completed 
              ? (isDark ? 'bg-primary-dark border-primary-dark' : 'bg-primary-DEFAULT border-primary-DEFAULT')
              : (isDark ? 'border-border-dark' : 'border-border-light')
          }`}
        >
          {task.completed && <Check size={14} color="white" />}
        </View>
        <Text 
          className={`text-base flex-1 ${
            task.completed 
              ? (isDark ? 'text-textMuted-dark line-through' : 'text-textMuted-light line-through')
              : (isDark ? 'text-text-dark' : 'text-text-light')
          }`}
        >
          {task.title}
        </Text>
      </TouchableOpacity>
      
      <View className="flex-row items-center ml-2">
        <TouchableOpacity 
          onPress={() => onEdit(task)}
          className="p-2"
          hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
        >
          <Edit2 size={18} className={isDark ? 'text-textMuted-dark' : 'text-textMuted-light'} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => onDelete(task.id)}
          className="p-2 ml-1"
          hitSlop={{ top: 10, bottom: 10, left: 5, right: 10 }}
        >
          <Trash2 size={18} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
