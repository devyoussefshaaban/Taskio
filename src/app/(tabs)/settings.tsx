import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-slate-50 items-center justify-center">
      <Text className="text-lg text-slate-800">Settings</Text>
      <Text className="text-sm text-slate-500 mt-2">Theme toggling goes here.</Text>
    </View>
  );
}
