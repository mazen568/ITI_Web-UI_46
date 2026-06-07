export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  category: string;
  tags: string;
  userId: string | number;
  completed: boolean;
}
