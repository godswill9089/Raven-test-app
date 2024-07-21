import React from 'react';
import './TransactionsLoaderMobile.css';
import SingleLineLoader from '../single-line-loader/SingleLineLoader';

const TransactionsLoaderMobile = () => {
  return (
    <div className='transactions-loader-mobile'>
      <div className='loader'>
        <SingleLineLoader />
      </div>
      <div className='loader'>
        <SingleLineLoader />
      </div>
      <div className='loader'>
        <SingleLineLoader />
      </div>
      <div className='loader'>
        <SingleLineLoader />
      </div>
    </div>
  );
};

export default TransactionsLoaderMobile;
