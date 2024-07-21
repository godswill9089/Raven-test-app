import React from 'react';
import './LoadingState.css';
import { getImages } from '../../../hooks/getImages';

const LoadingState = ({ height, borderNone }) => {
  const { loader } = getImages();
  return (
    <>
      <div
        style={{ height }}
        className={`loading-state card-bg ${borderNone && 'border-none'}`}
      >
        <div className='img-container'>
          <img src={loader} alt='loader' className='loading-state-img' />
        </div>
      </div>
    </>
  );
};
export const LoadingState2 = ({ height }) => {
  const { loader } = getImages();
  return (
    <>
      <div
        style={{ height }}
        className={'loading-state loading-state2 card-bg'}
      >
        <div className='img-container'>
          <img src={loader} alt='loader' className='loading-state-img' />
        </div>
      </div>
    </>
  );
};

export default LoadingState;
