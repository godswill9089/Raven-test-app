import React from 'react';
import './EmptyState.css';
import { getImages } from '../../../hooks/getImages';

const EmptyState = ({ text, borderNone, height }) => {
  const { emptyStateImg } = getImages();
  return (
    <div
      style={{ height }}
      className={`empty-state  ${borderNone && 'no-border'}`}
    >
      <div className='img-container'>
        <img src={emptyStateImg} alt='' className='empty-state-img' />
      </div>
      <p className='text'>{text}</p>
    </div>
  );
};

export default EmptyState;
