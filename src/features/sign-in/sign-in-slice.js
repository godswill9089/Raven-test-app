import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SignInService from './sign-in-service';
import * as states from '../strings';

const initialState = {
  signInFormData: { email: '', password: '' },
  signIn: {
    status: states.BASE,
    data: {},
  },
};

// Sign in
export const triggerSignIn = createAsyncThunk(
  'sign-in',
  async (params, thunkAPI) => {
    try {
      return await SignInService.signUp(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const signInSlice = createSlice({
  name: 'sign-in-reducer',
  initialState,
  reducers: {
    setSignInFormData: (state, action) => {
      state.signInFormData = action.payload;
    },
    resetSignInFormData: (state) => {
      state.signInFormData = initialState.signInFormData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(triggerSignIn.pending, (state) => {
      state.signIn.status = states.BASE;
      state.signIn.data = {};
    });
    builder.addCase(triggerSignIn.fulfilled, (state, action) => {
      state.signIn.status = states.SUCCESSFUL;
      state.signIn.data = action.payload;
    });
    builder.addCase(triggerSignIn.rejected, (state, action) => {
      state.signIn.status = states.ERROR;
      state.signIn.data = action.payload;
    });
  },
});

export default signInSlice.reducer;
export const { setSignInFormData, resetSignInFormData } = signInSlice.actions;
