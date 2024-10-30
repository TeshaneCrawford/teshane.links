export interface Toast {
  id: number
  title: string
  description?: string
  duration?: number
}

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])

  const add = (toast: Omit<Toast, 'id'>) => {
    const newToast: Toast = {
      id: Date.now(),
      ...toast,
      duration: toast.duration || 3000,
    }
    toasts.value.push(newToast)

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: Toast) => t.id !== newToast.id)
    }, newToast.duration)
  }

  return {
    toasts,
    add,
  }
}
