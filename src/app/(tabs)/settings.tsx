import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark items-center justify-center">
      <Text className="text-lg text-text-light dark:text-text-dark font-medium">Settings</Text>
      <Text className="text-sm text-textMuted-light dark:text-textMuted-dark mt-2">Use the top right icon to toggle theme.</Text>
    </View>
  );
}
