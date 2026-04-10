import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStore } from '../../stores/theme.store';

export default function SettingsScreen() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <View className={`flex-1 items-center justify-center ${isDark ? 'bg-background-dark' : 'bg-background-light'}`}>
      <Text className={`text-lg font-medium ${isDark ? 'text-text-dark' : 'text-text-light'}`}>Settings</Text>
      <Text className={`text-sm mt-2 ${isDark ? 'text-textMuted-dark' : 'text-textMuted-light'}`}>Use the top right icon to toggle theme.</Text>
    </View>
  );
}
