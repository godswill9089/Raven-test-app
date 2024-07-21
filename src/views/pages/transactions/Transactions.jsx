import React, { useEffect, useState } from 'react';
import './Transactions.css';
import CardTransactions from '../../molecules/card-transactions/CardTransactions';
import ModalLayout from '../../layouts/modal-layout/ModalLayout';
import InputGroup from '../../molecules/input-group/InputGroup';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaFunnelDollar,
  FaPlus,
} from 'react-icons/fa';
import { getImages } from '../../../hooks/getImages';
import Pill from '../../atoms/pill/Pill';
import Edit from '../../molecules/edit/Edit';
import Delete from '../../molecules/delete/Delete';
import Indicator from '../../atoms/indicator/Indicator';
import OutsideClickHandler from 'react-outside-click-handler';
import Dropdown from '../../molecules/dropdown/Dropdown';
import ModalAddTransaction from '../../modals/modal-add-transaction/ModalAddTransaction';
import ModalUpdateTransaction from '../../modals/modal-update-transaction/ModalUpdateTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetTransactions } from '../../../features/transactions/transactions-slice';
import moment from 'moment';
import capitalizeFirstLetter from '../../../utils/capitalizeOnlyFirstCharacter';
import LoadingState from '../../atoms/loading-state/LoadingState';
import TransactionsLoaderMobile from '../../atoms/transactions-loader-mobile/TransactionsLoaderMobile';
import EmptyState from '../../atoms/empty-state/EmptyState';
import ErrorState from '../../atoms/error-state/ErrorState';
const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const { listFilter } = getImages();
  const [transactionsTableData, setTransactionsTableData] = useState([]);

  const cards = [
    {
      id: 1,
      title: 'Total balance',
      amount: '87K',
      percentage: '+1%',
      time: 'today',
      status: 'other',
    },
    {
      id: 2,
      title: 'Total credit',
      amount: '234,120',
      percentage: '',
      time: 'today',
      status: 'gain',
    },
    {
      id: 3,
      title: 'Total debit',
      amount: 'N923K',
      percentage: '+5%',
      time: 'today',
      status: 'loss',
    },
  ];
  const [showAddNewTransactionModal, setShowAddNewTransactionModal] =
    useState(false);
  const [showUpdateTransactionModal, setShowUpdateTransactionModal] =
    useState(false);
  const [formData, setFormData] = useState({});
  const [transactionToAdd, setTransactionToAdd] = useState({});
  const [transactionToUpdate, setTransactionToUpdate] = useState({});
  // const [updatedTransaction, setUpdatedTransaction] = useState(false);

  const handleDelete = (transaction) => {
    const transactionsTableDataTemp = transactionsTableData.filter(
      (item) => transaction.id !== item.id
    );
    setTransactionsTableData(transactionsTableDataTemp);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleChangeSearchBar = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(triggerGetTransactions());
  }, []);
  useEffect(() => {
    if (transactions.status === 'successful') {
      setTransactionsTableData(transactions.data.transactions);
      setTotalDataSize(transactions.data.transactions.length);
    }
  }, [transactions]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const transactionsTableDataTemp = transactions.data.transactions.filter(
        (transaction) =>
          transaction._value.toString().includes(searchTerm) ||
          transaction.reference.toString().includes(searchTerm)
      );
      setTransactionsTableData(transactionsTableDataTemp);
    } else {
      setTransactionsTableData(transactions.data.transactions);
    }
  }, [searchTerm]);
  // pagination
  const [page, setPage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(5);
  const [totalDataSize, setTotalDataSize] = useState(0);
  const [currentPageText, setCurrentPageText] = useState('');
  const handlePagination = (direction) => {
    if (transactions.status === 'successful') {
      if (direction === 'left') {
        if (page === 1) {
        } else {
          setPage(page - 1);
        }
      } else {
        if (page * paginationSize > transactions.data.transactions?.length) {
        } else {
          setPage(page + 1);
        }
      }
    }
  };
  useEffect(() => {
    let a, b;
    a = page * paginationSize - (paginationSize - 1);
    b = page * paginationSize;
    if (page * paginationSize > transactions.data.transactions?.length) {
      b = transactions.data.transactions?.length;
    }
    setCurrentPageText(`${a}-${b}`);
    if (transactions.status === 'successful') {
      const transactionsTableDataTemp = transactions.data.transactions.slice(
        a - 1,
        b
      );
      setTransactionsTableData(transactionsTableDataTemp);
    }
  }, [page, transactions]);

  return (
    <>
      <div className='transactions'>
        <div className='container'>
          <div className='page-details-wrapper'>
            <div className='page-details'>
              <h1 className='page-title'>Transactions</h1>
              <p className='page-info'>
                View all your transactions in the list of product{' '}
              </p>
            </div>
            <div
              className='btn-add-transaction'
              onClick={() => setShowAddNewTransactionModal(true)}
            >
              <FaPlus />
            </div>
          </div>
          <div className='transaction-cards-wrapper'>
            <div className='transaction-cards'>
              {cards.map((card) => (
                <CardTransactions
                  key={card.id}
                  title={card.title}
                  amount={card.amount}
                  percentage={card.percentage}
                  time={card.time}
                  status={card.status}
                />
              ))}
            </div>
          </div>
          <div className='filters-wrapper'>
            <div className='searchbar-wrapper'>
              <input
                type='text'
                className='searchbar'
                placeholder='Search transactions'
                onChange={(e) => handleChangeSearchBar(e)}
                value={searchTerm}
              />
            </div>
            <div className='filters-con'>
              <div className='filters'>
                <div className='filter'>
                  <img src={listFilter} alt='list filter icon' />
                  Filter
                  <FaChevronDown />
                </div>
                <div className='filter date'>
                  <div
                    className='icon-con'
                    onClick={() => handlePagination('left')}
                  >
                    <FaChevronLeft className='icon' />
                  </div>
                  <div className='info'>
                    <div className='current'>{currentPageText}</div>
                    <div className='total'>of {totalDataSize}</div>
                  </div>
                  <div
                    className='icon-con'
                    onClick={() => handlePagination('right')}
                  >
                    <FaChevronRight className='icon' />
                  </div>
                </div>
              </div>
              <div className='filters-mobile'>
                <img src={listFilter} alt='list filter icon' />
              </div>
            </div>
          </div>
          <div className='table-wrapper'>
            <div className='table-layout'>
              <table>
                <thead>
                  <tr>
                    <th className='th-1'>Reference</th>
                    <th className='th-2'>Amount</th>
                    <th className='th-3'> Transaction date</th>
                    <th className='th-4'>Updated last</th>
                    <th className='th-5'>Status</th>
                    <th className='th-6'> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.status === 'base' ||
                  transactions.status === 'loading' ? (
                    <>
                      <tr className='tr-loading-state'>
                        <td colSpan={6}>
                          <LoadingState borderNone height='50rem' />
                        </td>
                      </tr>
                    </>
                  ) : transactions.status === 'successful' ? (
                    <>
                      {transactionsTableData?.length > 0 ? (
                        <>
                          {transactionsTableData.map((transaction) => (
                            <tr key={transaction.id}>
                              <td>
                                <div className='td-content-wrapper'>
                                  <Indicator
                                    variant={
                                      transaction.direction === 'debit'
                                        ? 'loss'
                                        : 'gain'
                                    }
                                  />
                                  {transaction.reference.length > 6
                                    ? `${transaction.reference.slice(0, 6)}...`
                                    : transaction.reference}
                                </div>
                              </td>
                              <td>
                                {transaction.currency || ''}{' '}
                                {transaction._value}
                              </td>
                              <td>
                                {moment(transaction.created_at).format(
                                  'DD, MMMM YYYY • h:mm a'
                                )}
                              </td>
                              <td>
                                {moment(transaction.updated_at).format(
                                  'DD, MMMM YYYY • h:mm a'
                                )}
                              </td>
                              <td>
                                <Pill
                                  text={
                                    transaction.status
                                      ? capitalizeFirstLetter(
                                          transaction.status
                                        )
                                      : 'N/A'
                                  }
                                  variant={
                                    transaction.status === 'success'
                                      ? 'success'
                                      : transaction.status === 'pending'
                                      ? 'warning'
                                      : transaction.status === 'failed'
                                      ? 'danger'
                                      : 'warning'
                                  }
                                />
                              </td>
                              <td>
                                <div className='td-content-wrapper'>
                                  <Edit
                                    onClick={() => {
                                      setShowUpdateTransactionModal(true);
                                      setTransactionToUpdate(transaction);
                                    }}
                                  />
                                  <Delete
                                    onClick={() => handleDelete(transaction)}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <td colSpan={6}>
                          <EmptyState
                            text={'No data...'}
                            borderNone
                            height='30rem'
                          />
                        </td>
                      )}
                    </>
                  ) : transactions.status === 'error' ? (
                    <tr className='tr-error-state'>
                      <td colSpan={6}>
                        <ErrorState
                          borderNone
                          height='30rem'
                          text={'Something went wrong...'}
                        />
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
            <div className='table-layout-mobile'>
              <div className='cards-table'>
                {transactions.status === 'base' ||
                transactions.status === 'loading' ? (
                  <TransactionsLoaderMobile />
                ) : transactions.status === 'successful' ? (
                  <>
                    {transactionsTableData?.length > 0 ? (
                      <>
                        {transactionsTableData.map((transaction) => (
                          <div key={transaction.id} className='card-table'>
                            <Indicator
                              variant={
                                transaction.direction === 'debit'
                                  ? 'loss'
                                  : 'gain'
                              }
                            />
                            <div className='details'>
                              <div className='info'>
                                <p className='amount'>
                                  {transaction.currency || ''}{' '}
                                  {transaction._value}
                                </p>
                                <div className='status'>
                                  <Pill
                                    text={
                                      transaction.status
                                        ? capitalizeFirstLetter(
                                            transaction.status
                                          )
                                        : 'N/A'
                                    }
                                    variant={
                                      transaction.status === 'success'
                                        ? 'success'
                                        : transaction.status === 'pending'
                                        ? 'warning'
                                        : transaction.status === 'failed'
                                        ? 'danger'
                                        : 'warning'
                                    }
                                  />
                                </div>
                              </div>
                              <div className='other'>
                                <div className='actions'>
                                  <Edit
                                    onClick={() => {
                                      setShowUpdateTransactionModal(true);
                                      setTransactionToUpdate(transaction);
                                    }}
                                  />
                                  <Delete
                                    onClick={() => handleDelete(transaction)}
                                  />
                                </div>
                                {/* <p className='date '>21, June 2024 • 4:15pm</p> */}
                                <p className='date date-2'>
                                  {moment(transaction.created_at).format(
                                    'DD, MMMM YYYY • h:mm a'
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : transactions.status === 'error' ? (
                  <></>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddNewTransactionModal && (
        <ModalLayout
          closeModal={() => {
            setShowAddNewTransactionModal(false);
          }}
        >
          <ModalAddTransaction
            setTransactionToAdd={setTransactionToAdd}
            transactionsTableData={transactionsTableData}
            setTransactionsTableData={setTransactionsTableData}
            closeModal={() => {
              setShowAddNewTransactionModal(false);
            }}
          />
        </ModalLayout>
      )}
      {showUpdateTransactionModal && (
        <ModalLayout
          closeModal={() => {
            setShowUpdateTransactionModal(false);
            setTransactionToUpdate({});
          }}
        >
          <ModalUpdateTransaction
            transactionToUpdate={transactionToUpdate}
            setTransactionToUpdate={setTransactionToUpdate}
            transactionsTableData={transactionsTableData}
            setTransactionsTableData={setTransactionsTableData}
            // setUpdatedTransaction={setUpdatedTransaction}
            closeModal={() => {
              setShowUpdateTransactionModal(false);
              // setTransactionToUpdate({});
              // if (!updatedTransaction) {
              // }
            }}
          />
        </ModalLayout>
      )}
    </>
  );
};

export default Transactions;
