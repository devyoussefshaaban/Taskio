import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check, Trash2 } from 'lucide-react-native';
import { Task } from '../types/task.types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View className="flex-row items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-slate-100">
      <TouchableOpacity 
        onPress={() => onToggle(task.id)}
        className="flex-row items-center flex-1"
      >
        <View className={`w-6 h-6 rounded-full border-2 items-center justify-center mr-3 ${task.completed ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
          {task.completed && <Check size={14} color="white" />}
        </View>
        <Text className={`text-base flex-1 ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
          {task.title}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => onDelete(task.id)}
        className="p-2 ml-2"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Trash2 size={20} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
};
