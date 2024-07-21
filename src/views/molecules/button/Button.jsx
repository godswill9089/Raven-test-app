import React from 'react';
import './Button.css';

const Button = ({ disabled, title, onClick }) => {
  return (
    <div
      onClick={() => {
        !disabled && onClick();
      }}
      className={`btn-component ${disabled && 'disabled'}`}
    >
      {title}
    </div>
  );
};

export default Button;
