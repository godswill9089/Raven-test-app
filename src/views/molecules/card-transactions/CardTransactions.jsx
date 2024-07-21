import React from 'react';
import './CardTransactions.css';

const CardTransactions = ({ title, amount, percentage, time, status }) => {
  return (
    <div className='card-transactions'>
      <h3 className='title'>{title}</h3>
      <div className='details-wrapper'>
        <h1 className='amount'>{amount}</h1>
        <div className='other'>
          {percentage && (
            <>
              <p className='percentage'>{percentage}</p>
              <p className='time'>{time}</p>
            </>
          )}
        </div>
      </div>
      <div className={`view-details ${status}`}>View details</div>
    </div>
  );
};

export default CardTransactions;
