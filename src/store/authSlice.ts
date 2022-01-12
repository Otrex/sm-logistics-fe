import { RootState } from "@app/store";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import AuthAction from "./client/auth/actions";

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

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("userRider") || "{}"),
  status: StatusState.IDLE,
  isAuthenticated: JSON.parse(
    localStorage.getItem("isAuthenticatedRider") || "0"
  ),
  // Set back to false
  isRegistered: false,
};

const logout = async () =>
  new Promise<{ data: { [key: string]: any } }>((resolve) =>
    setTimeout(() => resolve({ data: { status: "success" } }), 5000)
  );

export const logoutAsync = createAsyncThunk(
  "riderAuth/logout",
  async () => {
    const response = await logout();
    alert("hello worikinh");
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "riderAuth",
  initialState,
  reducers: {
    updateUserDetails: (state, action: PayloadAction<{}>) => {
      state.user = action.payload;
      alert("working from actions");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAsync.fulfilled, (state) => {
      state.status = StatusState.IDLE;
      alert("woriking");
      state.isAuthenticated = false;
    });

    builder.addCase(
      AuthAction.login.fulfilled,
      (state, { payload }) => {
        state.status = StatusState.IDLE;
        state.user = payload.account;
        state.isAuthenticated = false;
        console.log(state.user);
      }
    );

    builder.addCase(AuthAction.login.rejected, (state, payload) => {
      state.status = StatusState.IDLE;
      state.user = payload;
      console.log(state.user);
      state.isAuthenticated = false;
    });
  },
});

export const { updateUserDetails } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;
