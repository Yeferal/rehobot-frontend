import { createSlice } from '@reduxjs/toolkit';
// import { createStore } from 'redux';


interface AuthState {
  token: string | undefined;
  isAuthenticated: boolean;
  role: string | undefined;
}

// const persistConfig = {
//   key: 'root',
//   storage,
// }

const initialState: AuthState = {
  token: undefined,
  isAuthenticated: false,
  role: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // console.log(state.token);
    },
    setRole: (state, action) => {
      state.role = action.payload;
      // console.log(state.role);
    },
    clearToken: (state) => {
      state.token = undefined;
      state.role = undefined;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setToken, setRole, clearToken, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;

