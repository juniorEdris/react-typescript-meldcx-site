export interface Users {
  id: number;
  name: string;
}
export interface ActiveUser {
  users: Users[];
  loading: boolean;
}
