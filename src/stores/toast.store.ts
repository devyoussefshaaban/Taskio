import { create } from 'zustand';

type ToastType = 'success' | 'info' | 'error';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastState {
  toast: Toast | null;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (message: string, type: ToastType = 'success') => {
    set({ toast: { id: Date.now().toString(), message, type } });
  },
  hideToast: () => set({ toast: null }),
}));
