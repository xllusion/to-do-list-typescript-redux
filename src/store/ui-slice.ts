import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UINotification = {
  status: string;
  title: string;
  message: string;
};

interface UIState {
  isShow: boolean;
  notification: UINotification | null;
}

const initialUIState: UIState = { isShow: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle(state: UIState) {
      state.isShow = !state.isShow;
    },
    showNotification(state: UIState, action: PayloadAction<UINotification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
