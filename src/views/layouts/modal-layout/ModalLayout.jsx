import React, { useEffect, useState } from 'react';
import './ModalLayout.css';
import { FaTimes } from 'react-icons/fa';

const ModalLayout = ({ closeModal, children }) => {
  const [slide, setSlide] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const handleClickModal = (e) => {
    const element = e.target.closest('.modal-content');
    if (!element) {
      setSlide(false);
      setShowChildren(false)
      setTimeout(() => {
        closeModal();
      }, 100);
    }
  };
  const handleClickCloseBtn = () => {
    setSlide(false);
    setShowChildren(false);
    setTimeout(() => {
      closeModal();
    }, 100);
  };
  useEffect(() => {
    setSlide(true);
    setTimeout(() => {
      setShowChildren(true);
    }, 100);
  }, []);
  return (
    <div className='modal-layout' onClick={(e) => handleClickModal(e)}>
      <div className={`modal-content modal-left ${slide && 'slide'}`}>
        <div className='close-modal'>
          <div onClick={handleClickCloseBtn} className='btn-close'>
            <FaTimes />
          </div>
        </div>
        {showChildren && children}
      </div>
    </div>
  );
};

export default ModalLayout;
