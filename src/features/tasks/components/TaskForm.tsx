import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskFormValues } from '../schema/task.schema';
import { Plus, Check } from 'lucide-react-native';

interface TaskFormProps {
  initialTitle?: string;
  submitLabel?: 'add' | 'edit';
  onSubmitForm: (title: string) => void;
  onCancel?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ 
  initialTitle = '', 
  submitLabel = 'add', 
  onSubmitForm,
  onCancel
}) => {
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: initialTitle },
    mode: 'onChange'
  });

  useEffect(() => {
    reset({ title: initialTitle });
  }, [initialTitle]);

  const onSubmit = (data: TaskFormValues) => {
    onSubmitForm(data.title.trim());
    if (submitLabel === 'add') {
      reset({ title: '' });
    }
  };

  return (
    <View className="mb-6">
      <View className="flex-row items-center border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark rounded-xl px-4 py-2">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="flex-1 h-12 text-base text-text-light dark:text-text-dark"
              placeholder="What needs to be done?"
              placeholderTextColor="#94a3b8"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(onSubmit)}
              autoFocus={submitLabel === 'edit'}
            />
          )}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || !control._formValues.title}
          className={`w-10 h-10 rounded-full items-center justify-center ml-2 ${!isValid || !control._formValues.title ? 'bg-slate-300 dark:bg-slate-700' : 'bg-primary-DEFAULT dark:bg-primary-dark'}`}
        >
          {submitLabel === 'add' ? (
            <Plus size={20} color="white" />
          ) : (
            <Check size={20} color="white" />
          )}
        </TouchableOpacity>
        {submitLabel === 'edit' && onCancel && (
          <TouchableOpacity
            onPress={onCancel}
            className="w-10 h-10 rounded-full items-center justify-center ml-2 border border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark"
          >
            <Text className="text-textMuted-light dark:text-textMuted-dark text-xs">X</Text>
          </TouchableOpacity>
        )}
      </View>
      {errors.title && (
        <Text className="text-danger text-sm mt-1 ml-2">{errors.title.message}</Text>
      )}
    </View>
  );
};
