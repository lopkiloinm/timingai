export interface Task {
  id: string;
  title: string;
  totalTime: number; // in milliseconds
  isRunning: boolean;
  lastStartTime?: number; // timestamp
}
