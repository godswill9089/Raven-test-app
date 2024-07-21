import React from 'react';
import './ErrorState.css';
import { getImages } from '../../../hooks/getImages';

const ErrorState = ({ text, borderNone, height }) => {
  const { errorStateImg } = getImages();
  return (
    <div
      style={{ height }}
      className={`error-state  ${borderNone && 'no-border'}`}
    >
      <div className='img-container'>
        <img src={errorStateImg} alt='' className='error-state-img' />
      </div>
      <p className='text'>{text}</p>
    </div>
  );
};

export default ErrorState;
