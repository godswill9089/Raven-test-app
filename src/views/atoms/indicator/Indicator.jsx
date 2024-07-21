import React from 'react';
import './Indicator.css';
import { getImages } from '../../../hooks/getImages';

const Indicator = ({ variant }) => {
  const { arrowDownGreen, arrowUpRed } = getImages();
  return (
    <div className={`indicator ${variant}`}>
      <img src={variant === 'gain' ? arrowDownGreen : arrowUpRed} alt='' />
    </div>
  );
};

export default Indicator;
