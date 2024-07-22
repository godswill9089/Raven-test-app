import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaBars, FaChevronDown, FaQuestion } from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from '../../molecules/dropdown/Dropdown';
const Navbar = () => {
  const { logo, user } = getImages();
  const { signUpFormData } = useSelector((state) => state.signUp);

  // Log out
  const dropdownOptionsLogOut = [
    { id: 1, title: 'Log out', value: 'log-out' },
  ];
  const [
    dropdownSelectedLogOut,
    setDropdownSelectedLogOut,
  ] = useState({});
  const [
    showDropdownLogOut,
    setShowDropdownLogOut,
  ] = useState(false);

  useEffect(() => {
    if (dropdownSelectedLogOut.value === 'log-out') {
      window.location.replace('/sign-in')
      localStorage.removeItem('user')
    }
  },[dropdownSelectedLogOut])

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
              <Dropdown
                showDropdown={showDropdownLogOut}
                setShowDropdown={setShowDropdownLogOut}
                dropdownOptions={dropdownOptionsLogOut}
                dropdownSelected={dropdownSelectedLogOut}
                setDropdownSelected={setDropdownSelectedLogOut}
              >
                <div className='user-info-con' onClick={() => setShowDropdownLogOut(true)}>
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
              </Dropdown>
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
