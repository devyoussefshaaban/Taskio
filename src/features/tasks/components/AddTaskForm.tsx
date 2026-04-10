import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskFormValues } from '../schema/task.schema';
import { Plus } from 'lucide-react-native';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: '' }
  });

  const onSubmit = (data: TaskFormValues) => {
    onAdd(data.title.trim());
    reset();
  };

  return (
    <View className="mb-6">
      <View className="flex-row items-center border border-slate-200 bg-slate-50 rounded-xl px-4 py-2">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="flex-1 h-10 text-base text-slate-800"
              placeholder="What needs to be done?"
              placeholderTextColor="#94a3b8"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center ml-2"
        >
          <Plus size={20} color="white" />
        </TouchableOpacity>
      </View>
      {errors.title && (
        <Text className="text-red-500 text-sm mt-1 ml-2">{errors.title.message}</Text>
      )}
    </View>
  );
};
