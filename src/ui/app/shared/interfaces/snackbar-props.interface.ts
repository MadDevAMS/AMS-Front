export interface ISnackbarProps {
  mensaje: string,
  action?: string,
  type: 'error' | 'success' | 'info' | 'warning'
}