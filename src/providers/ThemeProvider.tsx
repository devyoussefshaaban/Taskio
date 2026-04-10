import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useThemeStore } from '../stores/theme.store';
import { StatusBar } from 'expo-status-bar';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeStore();
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  // We wrap the children in a view that forces the background color to match the theme
  // We use style={{ flex: 1 }} to guarantee it fills the screen even if className parsing fails on web.
  return (
    <View style={{ flex: 1 }} className="bg-background-light dark:bg-background-dark">
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      {children}
    </View>
  );
};
