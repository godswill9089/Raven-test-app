import React, { useEffect, useState } from 'react';
import './SignIn.css';
import Button from '../../molecules/button/Button';
import InputGroup from '../../molecules/input-group/InputGroup';
import { FaBackward } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { getImages } from '../../../hooks/getImages';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInFormData } from '../../../features/sign-in/sign-in-slice';

const SignIn = () => {
  const dispatch = useDispatch();
  const { signUpFormData } = useSelector((state) => state.signUp);
  const { logo } = getImages();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: signUpFormData.email || '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formDataTemp = { ...formData };
    formDataTemp[name] = value;
    setFormData(formDataTemp);
  };
  const handleSignin = () => {
    navigate('/dashboard/transactions');
    dispatch(setSignInFormData(formData));
  }

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
    } else {
      // go to sign up page and create an account
      // window.location.replace('/sign-up');
    }
  }, []);

  return (
    <div className='sign-in'>
      <div className='left-con'>
        <div className='logo-con'>
          <div className='logo-wrapper'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
        </div>
      </div>
      <div className='main-con'>
        <div className='content'>
          <div className='logo-con-mobile'>
            <div className='logo-wrapper'>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
          </div>
          <h1 className='title'>Sign in</h1>
          <form className=''>
            <div className='input-groups-wrapper'>
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
                title={'Sign in'}
                onClick={handleSignin}
                disabled={formData.email === '' || formData.password === ''}
              />
            </div>
          </form>
          <div className='no-account'>
            <p>Dont have an account?</p>
            <div className='icon-wrapper'>
              <Link to={'/sign-up'}>
                <span>Sign up</span>
              </Link>
              <FaBackward className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
