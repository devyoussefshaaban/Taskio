import { Tabs } from 'expo-router';
import { ListTodo, Settings, Moon, Sun } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { useThemeStore } from '../../stores/theme.store';

export default function TabLayout() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  const themeColors = {
    bg: isDark ? '#1e293b' : '#ffffff',
    text: isDark ? '#f8fafc' : '#0f172a',
    border: isDark ? '#334155' : '#e2e8f0',
    primary: isDark ? '#60a5fa' : '#3b82f6',
    inactive: isDark ? '#64748b' : '#94a3b8',
  };

  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.inactive,
        tabBarStyle: {
          backgroundColor: themeColors.bg,
          borderTopColor: themeColors.border,
        },
        headerStyle: {
          backgroundColor: themeColors.bg,
          borderBottomWidth: 1,
          borderBottomColor: themeColors.border,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: themeColors.text,
        headerRight: () => (
          <TouchableOpacity onPress={toggleTheme} className="mr-4 p-2">
            {isDark ? <Sun color={themeColors.text} size={22} /> : <Moon color={themeColors.text} size={22} />}
          </TouchableOpacity>
        )
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <ListTodo color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>
  );
}
