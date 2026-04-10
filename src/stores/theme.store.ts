import { create } from 'zustand';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark', // Default to dark as per requirements
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setTheme: (theme: Theme) => set({ theme })
}));
