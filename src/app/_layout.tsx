import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../providers/ThemeProvider';
import { ToastNotification } from '../components/ui/Toast';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Slot />
        <ToastNotification />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
