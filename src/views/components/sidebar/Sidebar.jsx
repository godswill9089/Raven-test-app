import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { FaPeopleArrows, FaRocket } from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signUpFormData } = useSelector((state) => state.signUp);
  const {
    rocket,
    archive,
    arrowLeftRight,
    fileLock2,
    fileText,
    piechart,
    piggyBank,
    settings,
    smartPhone,
    usersRound,
  } = getImages();
  const [sidebarOptions, setSidebarOptions] = useState([
    {
      id: 1,
      title: 'Overview',
      img: rocket,
      active: false,
      path: '/dashboard/overview',
    },
    {
      id: 2,
      title: 'Users',
      img: usersRound,
      active: false,
      path: '/dashboard/users',
    },
    {
      id: 3,
      title: 'Transactions',
      img: fileText,
      active: true,
      path: '/dashboard/transactions',
    },
    {
      id: 4,
      title: 'Transfers',
      img: arrowLeftRight,
      active: false,
      path: '/dashboard/transfers',
    },
    {
      id: 5,
      title: 'Deposits',
      img: archive,
      active: false,
      path: '/dashboard/deposits',
    },
    {
      id: 6,
      title: 'Savings',
      img: piggyBank,
      active: false,
      path: '/dashboard/savings',
    },
    {
      id: 7,
      title: 'Bill Payment',
      img: smartPhone,
      active: false,
      path: '/dashboard/bill-payment',
    },
    {
      id: 8,
      title: 'Reports',
      img: piechart,
      active: false,
      path: '/dashboard/reports',
    },
    {
      id: 9,
      title: 'Compliance',
      img: fileLock2,
      active: false,
      path: '/dashboard/compliance',
    },
    {
      id: 10,
      title: 'Settings',
      img: settings,
      active: false,
      path: '/dashboard/settings',
    },
  ]);
  useEffect(() => {
    const sidebarOptionsTemp = sidebarOptions.map((sidebarOption) => {
      const sidebarOptionTemp = { ...sidebarOption };
      if (location.pathname.includes(sidebarOptionTemp.path)) {
        sidebarOptionTemp.active = true;
      } else {
        sidebarOptionTemp.active = false;
      }
      return sidebarOptionTemp;
    });
    setSidebarOptions(sidebarOptionsTemp);
  }, [location.pathname]);
  return (
    <div className='sidebar-component'>
      <div className='user-info-wrapper'>
        <div className='user-info'>
          <div className='img-con'>TU</div>
          <div className='details'>
            <h3 className='title'>{signUpFormData.first_name}</h3>
            <p className='info'>{signUpFormData.email}</p>
          </div>
        </div>
      </div>
      <div className='sidebar-options-wrapper'>
        <ul className='sidebar-options'>
          {sidebarOptions.map((item) => (
            <li
              key={item.id}
              className={`sidebar-option ${item.active && 'active'}`}
              onClick={() => {
                navigate(`${item.path}`);
              }}
            >
              <span>
                <img src={item.img} alt='sidebar icon' className='' />
              </span>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
