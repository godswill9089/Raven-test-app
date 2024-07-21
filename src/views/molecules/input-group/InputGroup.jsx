import React, { useState } from 'react';
import './InputGroup.css';
import { FaEye, FaEyeSlash, FaStar } from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';

const InputGroup = ({
  title,
  name,
  type,
  onChange,
  placeholder,
  value,
  required,
}) => {
  const { asterix } = getImages();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='input-group'>
      <label htmlFor={name}>
        {title}
        {required && (
          <span className='icon'>
            <img src={asterix} alt='' />
          </span>
        )}
      </label>
      <div className='input-wrapper'>
        <input
          onChange={onChange}
          type={type === 'password' ? (showPassword ? 'text' : type) : type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
        />
        {type === 'password' && (
          <span className='icon' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
