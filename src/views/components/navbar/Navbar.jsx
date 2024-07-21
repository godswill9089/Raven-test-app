import React from 'react';
import './Navbar.css';
import { FaBars, FaChevronDown, FaQuestion } from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { logo, user } = getImages();
  const { signUpFormData } = useSelector((state) => state.signUp);
  return (
    <div className='navbar-component'>
      <div className='navbar-component-inner'>
        <div className='container'>
          <div className='content'>
            <div className='logo-wrapper'>
              {/* desktop */}
              <div className='logo'>
                <Link to='/'>
                  {' '}
                  <img src={logo} alt='logo' className='' />{' '}
                </Link>
              </div>
              {/* mobile */}
              <div className='hamburger'>
                <FaBars />
              </div>
            </div>
            <h3 className='transactions'>Transactions</h3>
            <div className='user-info-wrapper'>
              <div className='user-info-con'>
                <div className='question-mark'>
                  <FaQuestion />
                </div>
                <div className='user-info'>
                  <img src={user} alt='user' className='' />
                  <p className='name'>
                    {signUpFormData.first_name || ''}{' '}
                    {signUpFormData.last_name || ''}
                  </p>
                  <span>
                    <FaChevronDown />
                  </span>
                </div>
              </div>
              <div className='user-info-con-mobile'>
                <img src={user} alt='user' className='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
