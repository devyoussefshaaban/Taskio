import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskFormValues } from '../schema/task.schema';
import { Plus, Check } from 'lucide-react-native';
import { useThemeStore } from '../../../stores/theme.store';

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
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

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

  const isDisabled = !isValid || !control._formValues.title;

  return (
    <View className="mb-8 items-center w-full">
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={`w-full h-14 px-5 rounded-2xl border-2 text-base shadow-sm ${
              isDark 
                ? 'bg-surface-dark border-border-dark text-text-dark' 
                : 'bg-surface-light border-border-light text-text-light'
            }`}
            placeholder="What needs to be done?"
            placeholderTextColor={isDark ? '#94a3b8' : '#64748b'}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
            autoFocus={submitLabel === 'edit'}
          />
        )}
      />
      {errors.title && (
        <Text className="text-danger text-sm mt-2 self-start ml-2">{errors.title.message}</Text>
      )}
      
      <View className="flex-row mt-4 items-center justify-center">
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={isDisabled}
          className={`px-8 py-3 rounded-full flex-row items-center justify-center shadow-sm ${
            isDisabled
              ? (isDark ? 'bg-slate-700' : 'bg-slate-300')
              : (isDark ? 'bg-primary-dark' : 'bg-primary-DEFAULT')
          }`}
        >
          {submitLabel === 'add' ? (
            <>
              <Plus size={20} color="white" />
              <Text className="text-white font-semibold ml-2 text-base">Add Task</Text>
            </>
          ) : (
            <>
              <Check size={20} color="white" />
              <Text className="text-white font-semibold ml-2 text-base">Save Changes</Text>
            </>
          )}
        </TouchableOpacity>
        
        {submitLabel === 'edit' && onCancel && (
          <TouchableOpacity
            onPress={onCancel}
            className={`ml-4 px-6 py-3 rounded-full border-2 ${
              isDark 
                ? 'border-border-dark bg-transparent' 
                : 'border-border-light bg-transparent'
            }`}
          >
            <Text className={isDark ? 'text-textMuted-dark font-medium' : 'text-textMuted-light font-medium'}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
