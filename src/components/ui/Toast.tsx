import React, { useEffect } from 'react';
import { Text, Animated } from 'react-native';
import { useToastStore } from '../../stores/toast.store';
import { CheckCircle2, Info, XCircle } from 'lucide-react-native';

export const ToastNotification: React.FC = () => {
  const { toast, hideToast } = useToastStore();
  const opacity = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    if (toast) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 8,
          useNativeDriver: true,
        })
      ]).start();

      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: -20,
            duration: 300,
            useNativeDriver: true,
          })
        ]).start(() => hideToast());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success': return <CheckCircle2 size={20} color="#10b981" />;
      case 'error': return <XCircle size={20} color="#ef4444" />;
      default: return <Info size={20} color="#3b82f6" />;
    }
  };

  return (
    <Animated.View 
      style={{ opacity, transform: [{ translateY }] }}
      className="absolute top-12 left-6 right-6 z-50 flex-row items-center px-4 py-3 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm rounded-2xl"
    >
      {getIcon()}
      <Text className="ml-3 text-text-light dark:text-text-dark font-medium text-sm flex-1">
        {toast.message}
      </Text>
    </Animated.View>
  );
};
