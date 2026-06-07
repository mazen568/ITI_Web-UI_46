export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'delete' | 'update' | 'undo';
}
