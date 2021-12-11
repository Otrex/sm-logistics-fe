export enum StatusState {
  IDLE = "IDLE",
  LOADING = "LOADING",
  FAILED = "FAILED",
}

export interface AuthState {
  isAuthenticated: boolean;
  user: { [key: string]: any } | null;
  status: StatusState;
  isRegistered: boolean;
}
