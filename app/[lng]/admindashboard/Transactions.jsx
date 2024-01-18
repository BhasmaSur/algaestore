import React, { useEffect, useState } from 'react';
import TransactionCard from './TransactionCard';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { TRANSACTION_STATUS_LIST } from '../../constants/transactionDetails';
import ConfirmationModal from './ConfimationModal';

const Transactions = () => {
  const [transactionsList, setTransactionsList] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  useEffect(() => {
    if (!transactionsList) {
      httpService(CONTROLLERS.getAllTransactions, METHODS.get, null, API).then(
        (src) => {
          if (src) {
            setTransactionsList(src.data);
            console.log('data', src);
          }
        }
      );
    }
  }, []);

  const confirmCallback = () => {
    httpService(
      CONTROLLERS.updateTransactionStatus,
      METHODS.post,
      {
        transactionId: modalData.transactionDetails.transactionId,
        status: modalData.changedValue,
      },
      API
    ).then((res) => {
      if (res) {
        if (res.data.updateStatus) {
          alert('status updated successfully');
        } else {
          alert('failed');
        }
      }
    });

    setShowModal(false);
  };

  const openConfirmationBox = (value, transaction) => {
    const selectedStatus = TRANSACTION_STATUS_LIST.find(
      (item) => item.value === value
    );
    setModalData({
      title: 'Status Box',
      description:
        'Are you sure you want to change the status to : ' + selectedStatus.key,
      negativeText: 'Cancel',
      positiveText: 'Change Status',
      changedValue: value,
      transactionDetails: transaction,
    });
    setShowModal(true);
  };
  return (
    <>
      <div
        className="sm:text-[32px] text-[20px]"
        style={{ color: 'white', textAlign: 'center' }}
      >
        <div style={{ marginBottom: 30 }}>Transactions List</div>
        <div class="flex flex-col overflow-x-auto">
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Buyer
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Items
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Total
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionsList &&
                      transactionsList.map((transaction, index) => {
                        return (
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              {transaction.buyer}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <TransactionCard
                                itemList={transaction.productDetails}
                              />
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              {transaction.cost}
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <div class="relative inline-flex">
                                <svg
                                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 412 232"
                                >
                                  <path
                                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                    fill="#648299"
                                    fill-rule="nonzero"
                                  />
                                </svg>
                                <select
                                  defaultValue={transaction.status}
                                  onChange={(e) =>
                                    openConfirmationBox(
                                      e.target.value,
                                      transaction
                                    )
                                  }
                                  class="ml-2 mr-2 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                >
                                  {TRANSACTION_STATUS_LIST.map((item) => {
                                    return (
                                      <option value={item.value}>
                                        {item.key}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalData && (
        <ConfirmationModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalData={modalData}
          callBack={confirmCallback}
        />
      )}
    </>
  );
};

export default Transactions;
