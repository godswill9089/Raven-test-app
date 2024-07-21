import React from 'react';
import './InputGroup2.css';
import { FaChevronDown, FaStar } from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';

const InputGroup2 = ({ title, value, onClick, required }) => {
  const { asterix } = getImages();
  return (
    <div className='input-group-2'>
      <div className='title'>
        {title}
        {required && (
          <span className='title-icon'>
            <img src={asterix} alt='' />
          </span>
        )}
      </div>
      <div onClick={onClick} className='input'>
        <span className='value'>{value}</span>
        <span className='icon'>
          <FaChevronDown />
        </span>
      </div>
    </div>
  );
};

export default InputGroup2;
