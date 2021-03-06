import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import auth from "@store/authSlice";
export const store = configureStore({
  reducer: {
    auth,
  },
});

export type AppDispatch = typeof store.dispatch | any;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
