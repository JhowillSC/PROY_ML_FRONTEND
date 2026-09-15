import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'

type ToastType = 'success' | 'error'

interface ToastState {
  message: string
  type: ToastType
}

interface ToastContextValue {
  toast: ToastState | null
  showToast: (message: string, type: ToastType) => void
  clearToast: () => void
}

export const ToastContext = createContext<ToastContextValue>({
  toast: null,
  showToast: () => undefined,
  clearToast: () => undefined,
})

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type })
  }, [])

  const clearToast = useCallback(() => setToast(null), [])

  const value = useMemo(() => ({ toast, showToast, clearToast }), [toast, showToast, clearToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
