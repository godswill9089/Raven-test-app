import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SignUpService from './sign-up-service';
import * as states from '../strings';

const initialState = {
  signUpFormData: { first_name: '', last_name: '', email: '', password: '' },
  signUp: {
    status: states.BASE,
    data: {},
  },
};


export const triggerSignUp = createAsyncThunk(
  'sign-up',
  async (params, thunkAPI) => {
    try {
      return await SignUpService.signUp(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const signUpSlice = createSlice({
  name: 'sign-up-reducer',
  initialState,
  reducers: {
    setSignUpFormData: (state, action) => {
      state.signUpFormData = action.payload;
    },
    resetSignUpFormData: (state) => {
      state.signUpFormData = initialState.signUpFormData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(triggerSignUp.pending, (state) => {
      state.signUp.status = states.BASE;
      state.signUp.data = {};
    });
    builder.addCase(triggerSignUp.fulfilled, (state, action) => {
      state.signUp.status = states.SUCCESSFUL;
      state.signUp.data = action.payload;
    });
    builder.addCase(triggerSignUp.rejected, (state, action) => {
      state.signUp.status = states.ERROR;
      state.signUp.data = action.payload;
    });
  },
});

export default signUpSlice.reducer;
export const { setSignUpFormData, resetSignUpFormData } = signUpSlice.actions;
