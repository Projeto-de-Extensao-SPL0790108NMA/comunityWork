import { useState, useCallback } from 'react';
import { ToastType } from '../components/Toast';

interface ToastState {
  visible: boolean;
  message: string;
  type: ToastType;
}

/**
 * Hook para gerenciar Toast de forma simples
 *
 * @example
 * const { showToast, toastProps } = useToast();
 *
 * // Mostrar toast de sucesso
 * showToast('Operação realizada com sucesso!', 'success');
 *
 * // No JSX
 * <Toast {...toastProps} />
 */
export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ visible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, visible: false }));
  }, []);

  return {
    showToast,
    hideToast,
    toastProps: {
      ...toast,
      onHide: hideToast,
    },
  };
};
