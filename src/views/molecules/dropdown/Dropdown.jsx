import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './Dropdown.css';

const Dropdown = ({
  showDropdown,
  setShowDropdown,
  dropdownOptions,
  dropdownSelected,
  setDropdownSelected,
  children,
}) => {
  return (
    <div className='dropdown-component'>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowDropdown(false);
        }}
      >
        <div className='dropdown-wrapper'>
          {children}
          {showDropdown && (
            <div className='dropdown-con'>
              <ul className='dropdown'>
                {dropdownOptions.map((item) => {
                  return (
                    <li
                      className={`${
                        item.value === dropdownSelected.value && 'selected'
                      }`}
                      key={item.id}
                      onClick={() => {
                        setDropdownSelected(item);
                        setShowDropdown(false);
                      }}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Dropdown;
