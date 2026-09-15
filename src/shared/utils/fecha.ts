export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
  }).format(date)
