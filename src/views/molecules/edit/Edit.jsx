import React from 'react';
import { getImages } from '../../../hooks/getImages';
import './Edit.css';
import { FaEdit } from 'react-icons/fa';
const Edit = ({ onClick }) => {
  // const { editIcon } = getImages();
  return (
    <div onClick={onClick} className='edit-component'>
      {/* <img src={editIcon} alt='' /> */}
      <FaEdit />
    </div>
  );
};

export default Edit;
