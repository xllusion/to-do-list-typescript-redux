import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import todoSlice from './todo-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, todo: todoSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {ui: UIState, todo: TodoState}
export type AppDispatch = typeof store.dispatch

export default store;
