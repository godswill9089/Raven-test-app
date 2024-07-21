import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import signUpReducer from '../features/sign-up/sign-up-slice';
import signInReducer from '../features/sign-in/sign-in-slice';
import transactionsReducer from '../features/transactions/transactions-slice';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
