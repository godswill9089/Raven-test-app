import React, { useEffect, useState } from 'react';
import './ModalUpdateTransaction.css';
import Dropdown from '../../molecules/dropdown/Dropdown';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import InputGroup from '../../molecules/input-group/InputGroup';
import Button from '../../molecules/button/Button';
import capitalizeFirstLetter from '../../../utils/capitalizeOnlyFirstCharacter';

const ModalUpdateTransaction = ({
  transactionToUpdate,
  setTransactionToUpdate,
  transactionsTableData,
  setTransactionsTableData,
  closeModal,
}) => {
  const [transactionToUpdateTemp, setTransactionToUpdateTemp] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const transaction = { ...transactionToUpdateTemp };
    transaction[name] = value;
    setTransactionToUpdateTemp(transaction);
  };

  // transaction direction
  const dropdownOptionsTransactionDirection = [
    { id: 1, title: 'Debit', value: 'debit' },
    { id: 2, title: 'Credit', value: 'credit' },
  ];
  const [
    dropdownSelectedTransactionDirection,
    setDropdownSelectedTransactionDirection,
  ] = useState({});
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
    // setTransactionToUpdate(transactionToUpdateTemp);
    const updated_at = new Date().toISOString();
    let transactionToUpdate = { ...transactionToUpdateTemp, updated_at };

    const transactionsTableDataTemp = transactionsTableData.map(
      (transaction) => {
        let obj = { ...transaction };
        if (obj.id === transactionToUpdate.id) {
          obj = transactionToUpdate;
        }
        return obj;
      }
    );
    setTransactionsTableData(transactionsTableDataTemp);
    closeModal();
  };
  // set input values
  useEffect(() => {
    setDropdownSelectedTransactionDirection({
      id: transactionToUpdate.id,
      title: capitalizeFirstLetter(transactionToUpdate.direction || ''),
      value: transactionToUpdate.direction,
    });
    setDropdownSelectedStatus({
      id: transactionToUpdate.id,
      title: capitalizeFirstLetter(transactionToUpdate.status || ''),
      value: transactionToUpdate.status || '',
    });
    setTransactionToUpdateTemp({
      ...transactionToUpdate,
      _value: transactionToUpdate._value,
    });
  }, []);

  // update input values
  useEffect(() => {
    const formData = { ...transactionToUpdate };
    formData.direction = dropdownSelectedTransactionDirection.value;
    formData.status = dropdownSelectedStatus.value;
    setTransactionToUpdateTemp(formData);
  }, [dropdownSelectedTransactionDirection, dropdownSelectedStatus]);

  return (
    <div className='modal-update-transaction'>
      <h1 className='modal-title'>Update transaction</h1>
      <p className='modal-info'>Update transaction table</p>
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
            value={transactionToUpdateTemp._value}
            required
          />
        </div>
        <div className='btn'>
          <Button title={'Save Changes'} onClick={handleClickBtn} />
        </div>
      </form>
    </div>
  );
};

export default ModalUpdateTransaction;
