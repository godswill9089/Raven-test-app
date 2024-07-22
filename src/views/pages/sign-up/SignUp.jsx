import React, { useState } from 'react';
import './SignUp.css';
import Button from '../../molecules/button/Button';
import InputGroup from '../../molecules/input-group/InputGroup';
import { FaBackward } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { getImages } from '../../../hooks/getImages';
import { useDispatch } from 'react-redux';
import { setSignUpFormData } from '../../../features/sign-up/sign-up-slice';
import { TbArrowBack } from 'react-icons/tb';
const SignUp = () => {
  const dispatch = useDispatch();
  const { logo } = getImages();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formDataTemp = { ...formData };
    formDataTemp[name] = value;
    setFormData(formDataTemp);
  };
  const handleCreateAnAccount = () => {
    navigate('/sign-in');
    dispatch(setSignUpFormData(formData));
    localStorage.setItem('user', JSON.stringify(formData));
  };
  return (
    <div className='sign-up'>
      <div className='main-con'>
        <div className='content'>
          <div className='logo-con-mobile'>
            <div className='logo-wrapper'>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
          </div>
          <h1 className='title'>Create an account</h1>
          <form className=''>
            <div className='input-groups-wrapper'>
              <InputGroup
                title='First name'
                name='first_name'
                type='text'
                onChange={handleChange}
                placeholder='Enter first name'
                value={formData.first_name}
                required
              />
              <InputGroup
                title='Last name'
                name='last_name'
                type='text'
                onChange={handleChange}
                placeholder='Enter last name'
                value={formData.last_name}
                required
              />
              <InputGroup
                title='Email'
                name='email'
                type='text'
                onChange={handleChange}
                placeholder='Enter email'
                value={formData.email}
                required
              />
              <InputGroup
                title='Password'
                name='password'
                type='password'
                onChange={handleChange}
                placeholder='Enter password'
                value={formData.password}
                required
              />
            </div>
            <div className='btn-wrapper'>
              <Button
                title={'Create an account'}
                onClick={handleCreateAnAccount}
                disabled={
                  formData.first_name === '' ||
                  formData.last_name === '' ||
                  formData.email === '' ||
                  formData.password === ''
                }
              />
            </div>
          </form>
          <div className='no-account'>
            <p>Already have an account?</p>
            <div className='icon-wrapper'>
              <Link to={'/sign-in'}>
                <span>Sign in</span>
              </Link>
              <TbArrowBack className='icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='right-con'></div>
      <div className='logo-con'>
        <div className='logo-wrapper'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
