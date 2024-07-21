import React from 'react';
import './Pill.css';

const Pill = ({ text, variant }) => {
  return <div className={`pill ${variant}`}>{text}</div>;
};

export default Pill;
