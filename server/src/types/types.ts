export interface ITask {
  id: number;
  title: string;
  category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'Low' | 'Medium' | 'High';
  description: string;
  dateCreated: string;
}