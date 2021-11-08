import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from '@app/store';
import { AuthState, StatusState, LoginParams, RegistrationParams } from '@app/types';
import AuthAPI from '@app/webApi/auth';

const initialState: AuthState = {
  user: null,
  status: StatusState.IDLE,
  isAuthenticated: false,// Set back to false
  isRegistered: false
};

export const loginAsync = createAsyncThunk(
  'clientAuth/login',
  async (data: LoginParams) => {
    const response = await AuthAPI.loginClient(data);
    return response;
  }
);

export const registrationAsync = createAsyncThunk(
  'clientAuth/registration',
  async (data: RegistrationParams) => {
    console.log(data)
    const response = await AuthAPI.registerClient(data);
    return response.data;
  }
);

export const logoutAsync = createAsyncThunk(
  'clientAuth/logout',
  async () => {
    const response = await AuthAPI.logoutClient();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'clientAuth',
  initialState,
  reducers: {
    updateUserDetails: (state, action: PayloadAction<{}>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = StatusState.LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = StatusState.IDLE;
        console.log(action)
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = StatusState.FAILED;
        toast.error('login failed')
        state.isAuthenticated = false;
      })
      .addCase(registrationAsync.pending, (state) => {
        state.status = StatusState.LOADING;
      })
      .addCase(registrationAsync.fulfilled, (state) => {
        state.status = StatusState.IDLE;
        toast.info('registration successful');
        state.isRegistered = true
      })
      .addCase(registrationAsync.rejected, (state) => {
        state.status = StatusState.IDLE;
        toast.error('registration failed');
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = StatusState.IDLE;
        toast.info('logout successful');
        state.isAuthenticated = false;
      });
  },
});

export const { updateUserDetails } = authSlice.actions;
export const selectUser = (state: RootState) => state.clientAuth.user?.user;
export const isAuthenticatedSelector = (state: RootState) => state.clientAuth.isAuthenticated;
export const isRegisteredSelector = (state: RootState) => state.clientAuth.isRegistered;
export const requestStatusSelector = (state: RootState) => state.clientAuth.status;

export default authSlice.reducer;
