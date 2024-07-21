import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransactionsService from './transactions-service';
import * as states from '../strings';

const initialState = {
  transactions: {
    status: states.BASE,
    data: {},
  },
};

// transactions
export const triggerGetTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (params, thunkAPI) => {
    try {
      const data = TransactionsService.getTransactions(params);
      return await data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(triggerGetTransactions.pending, (state) => {
      state.transactions.status = states.BASE;
      state.transactions.data = {};
    });
    builder.addCase(triggerGetTransactions.fulfilled, (state, action) => {
      state.transactions.status = states.SUCCESSFUL;
      state.transactions.data = action.payload;
    });
    builder.addCase(triggerGetTransactions.rejected, (state, action) => {
      state.transactions.status = states.ERROR;
      state.transactions.data = action.payload;
    });
  },
});

export default transactionsSlice.reducer;
