import React, { useEffect, useState } from 'react';
import './ModalAddTransaction.css';
import Dropdown from '../../molecules/dropdown/Dropdown';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import InputGroup from '../../molecules/input-group/InputGroup';
import Button from '../../molecules/button/Button';

const ModalAddTransaction = ({
  transactionToUpdate,
  transactionsTableData,
  setTransactionsTableData,
  closeModal,
}) => {
  const [formDataTemp, setFormDataTemp] = useState({
    direction: '',
    status: '',
    _value: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formData = { ...formDataTemp };
    formData[name] = value;
    setFormDataTemp(formData);
  };

  // transaction direction
  const dropdownOptionsTransactionDirection = [
    { id: 1, title: 'Debit', value: 'debit' },
    { id: 2, title: 'Credit', value: 'credit' },
  ];
  const [
    dropdownSelectedTransactionDirection,
    setDropdownSelectedTransactionDirection,
  ] = useState({ id: 1, title: 'Debit', value: 'debit' });
  const [
    showDropdownTransactionDirection,
    setShowDropdownTransactionDirection,
  ] = useState(false);

  // status
  const dropdownOptionsStatus = [
    { id: 1, title: 'Success', value: 'success' },
    { id: 2, title: 'Pending', value: 'pending' },
    { id: 3, title: 'Failed', value: 'failed' },
  ];
  const [dropdownSelectedStatus, setDropdownSelectedStatus] = useState({
    id: 1,
    title: 'Success',
    value: 'success',
  });
  const [showDropdownStatus, setShowDropdownStatus] = useState(false);

  const handleClickBtn = () => {
    const id = new Date().getTime();
    const created_at = new Date().toISOString();
    const updated_at = new Date().toISOString();
    const currency = 'NGN';
    let reference = Math.floor(Math.random() * Math.pow(10, 16));
    const transactionToAdd = {
      ...formDataTemp,
      id,
      created_at,
      updated_at,
      currency,
      reference,
    };
    const transactionsTableDataTemp = [
      transactionToAdd,
      ...transactionsTableData,
    ];
    setTransactionsTableData(transactionsTableDataTemp);
    closeModal();
  };

  useEffect(() => {
    const formData = { ...formDataTemp };
    formData.direction = dropdownSelectedTransactionDirection.value;
    formData.status = dropdownSelectedStatus.value;
    setFormDataTemp(formData);
  }, [dropdownSelectedTransactionDirection, dropdownSelectedStatus]);

  return (
    <div className='modal-add-transaction'>
      <h1 className='modal-title'>Add new transaction</h1>
      <p className='modal-info'>Add a new transaction to the table</p>
      <form action=''>
        <div className='input-groups-wrapper'>
          {/* transaction direction */}
          <Dropdown
            showDropdown={showDropdownTransactionDirection}
            setShowDropdown={setShowDropdownTransactionDirection}
            dropdownOptions={dropdownOptionsTransactionDirection}
            dropdownSelected={dropdownSelectedTransactionDirection}
            setDropdownSelected={setDropdownSelectedTransactionDirection}
          >
            <InputGroup2
              title='Transaction direction'
              onClick={() => setShowDropdownTransactionDirection(true)}
              value={dropdownSelectedTransactionDirection.title}
              required
            />
          </Dropdown>
          {/* status */}
          <Dropdown
            showDropdown={showDropdownStatus}
            setShowDropdown={setShowDropdownStatus}
            dropdownOptions={dropdownOptionsStatus}
            dropdownSelected={dropdownSelectedStatus}
            setDropdownSelected={setDropdownSelectedStatus}
          >
            <InputGroup2
              title='Status'
              onClick={() => setShowDropdownStatus(true)}
              value={dropdownSelectedStatus.title}
              required
            />
          </Dropdown>
          <InputGroup
            title='Amount'
            name='_value'
            type='number'
            onChange={handleChange}
            placeholder='Enter amount'
            value={formDataTemp.password}
            required
          />
        </div>
        <div className='btn'>
          <Button
            disabled={formDataTemp._value === ''}
            title={'Add transaction'}
            onClick={handleClickBtn}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalAddTransaction;
