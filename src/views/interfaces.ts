export interface Users {
  id: number;
  name: string;
}
export interface ActiveUser {
  users: Users[];
  loading: boolean;
}
export interface NotifyData {
  name: string;
  email: string;
  repoUrl: string;
  message: string;
}
