import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
  hasAuthorization: false,
  authWarning: ''
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    obtainAuthorization(state) {
      state.hasAuthorization = true;
      state.authWarning = '';
    },
    removeAuthorization(state) {
      state.hasAuthorization = false;
    },
    warningAuthorization(state, action) {
      state.authWarning = action.payload;
    },

  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;