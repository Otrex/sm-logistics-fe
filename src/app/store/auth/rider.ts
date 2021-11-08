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
  'riderAuth/login',
  async (data: LoginParams) => {
    // console.log(data)
    const response = await AuthAPI.loginRider(data);
    console.log(response)
    return response;
  }
);

export const registrationAsync = createAsyncThunk(
  'riderAuth/registration',
  async (data: RegistrationParams) => {
    console.log(data)
    const response = await AuthAPI.registerRider(data);
    return response.data;
  }
);

export const logoutAsync = createAsyncThunk(
  'riderAuth/logout',
  async () => {
    const response = await AuthAPI.logoutRider();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'riderAuth',
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
export const selectUser = (state: RootState) => state.riderAuth.user?.user;
export const isAuthenticatedSelector = (state: RootState) => state.riderAuth.isAuthenticated;
export const isRegisteredSelector = (state: RootState) => state.riderAuth.isRegistered;
export const requestStatusSelector = (state: RootState) => state.riderAuth.status;

export default authSlice.reducer;
