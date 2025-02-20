import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';
import SignUp from './views/pages/sign-up/SignUp';
import SignIn from './views/pages/sign-in/SignIn';
import DashboardLayout from './views/layouts/dashboard-layout/DashboardLayout';
import Transactions from './views/pages/transactions/Transactions';
import Overview from './views/pages/overview/Overview';
import Users from './views/pages/users/Users';
import Transfers from './views/pages/transfers/Transfers';
import Deposits from './views/pages/deposits/Deposits';
import Savings from './views/pages/savings/Savings';
import BillPayment from './views/pages/bill-payment/BillPayment';
import Reports from './views/pages/reports/Reports';
import Compliance from './views/pages/compliance/Compliance';
import Settings from './views/pages/Settings/Settings';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirect

function App() {
  const children = [
    {
      path: '/dashboard/overview',
      element: <Overview />,
    },
    {
      path: '/dashboard/users',
      element: <Users />,
    },
    {
      path: '/dashboard/transactions',
      element: <Transactions />,
    },
    {
      path: '/dashboard/transfers',
      element: <Transfers />,
    },
    {
      path: '/dashboard/deposits',
      element: <Deposits />,
    },
    {
      path: '/dashboard/savings',
      element: <Savings />,
    },
    {
      path: '/dashboard/bill-payment',
      element: <BillPayment />,
    },
    {
      path: '/dashboard/reports',
      element: <Reports />,
    },
    {
      path: '/dashboard/compliance',
      element: <Compliance />,
    },
    {
      path: '/dashboard/settings',
      element: <Settings />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to='/sign-up' />, // Redirect from root to /sign-up
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;