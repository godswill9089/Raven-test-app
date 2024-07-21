import React from 'react';
import { getImages } from '../../../hooks/getImages';
import './Delete.css';
const Delete = ({ onClick }) => {
  const { deleteIcon } = getImages();
  return (
    <div onClick={onClick} className='delete-component'>
      <img src={deleteIcon} alt='' />
    </div>
  );
};

export default Delete;
