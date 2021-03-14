import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from './reducer';

// Configure Redux Store from the Reducer
export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
