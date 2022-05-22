import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoItem = {
  id: string;
  text: string;
};

interface TodoState {
  items: TodoItem[];
}

const initialTodoState: TodoState = { items: [] };

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addItem(state: TodoState, action: PayloadAction<TodoItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) state.items.push({ ...newItem });
    },
    removeItem(state: TodoState, action: PayloadAction<string>) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
