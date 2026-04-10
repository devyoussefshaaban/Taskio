import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check, Trash2, Edit2 } from 'lucide-react-native';
import { Task } from '../types/task.types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <View className="flex-row items-center justify-between p-4 mb-3 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark">
      <TouchableOpacity 
        onPress={() => onToggle(task.id)}
        className="flex-row items-center flex-1"
      >
        <View className={`w-6 h-6 rounded-full border-2 items-center justify-center mr-3 ${task.completed ? 'bg-primary-DEFAULT dark:bg-primary-dark border-primary-DEFAULT dark:border-primary-dark' : 'border-border-light dark:border-border-dark'}`}>
          {task.completed && <Check size={14} color="white" />}
        </View>
        <Text className={`text-base flex-1 ${task.completed ? 'text-textMuted-light dark:text-textMuted-dark line-through' : 'text-text-light dark:text-text-dark'}`}>
          {task.title}
        </Text>
      </TouchableOpacity>
      
      <View className="flex-row items-center ml-2">
        <TouchableOpacity 
          onPress={() => onEdit(task)}
          className="p-2"
          hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
        >
          <Edit2 size={18} className="text-textMuted-light dark:text-textMuted-dark" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => onDelete(task.id)}
          className="p-2 ml-1"
          hitSlop={{ top: 10, bottom: 10, left: 5, right: 10 }}
        >
          <Trash2 size={18} color="#ef4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
