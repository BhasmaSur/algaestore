import { COLLECTIONS } from '../constants/collectionDetails';
import { TRANSACTION_HEAD } from '../constants/transactionDetails';
import { db } from './firebaseService';
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  updateDoc,
} from 'firebase/firestore';

const getOrderHostoryInArray = async (ordersList) => {
  let transactionList = [];
  if (ordersList.length > 0) {
    const q = query(
      collection(db, COLLECTIONS.TRANSACTION_DETAILS),
      where('transactionId', 'in', ordersList)
    );
    const queryTransactionSnap = await getDocs(q);
    queryTransactionSnap.forEach((doc) => {
      transactionList.push(doc.data());
    });
  }
  return transactionList;
};

const getAllTransactions = async () => {
  let transactionList = [];
  try {
    const q = query(
      collection(db, COLLECTIONS.TRANSACTION_DETAILS),
      orderBy('transactionId', 'desc')
    );
    const queryTransactionListSnap = await getDocs(q);
    queryTransactionListSnap.forEach((doc) => {
      transactionList.push(doc.data());
    });
    return transactionList;
  } catch (e) {
    return transactionList;
  }
};

const getLastTransactionId = async () => {
  const q_Transaction = query(
    collection(db, COLLECTIONS.TRANSACTION_DETAILS),
    orderBy('transactionId', 'desc'),
    limit(1)
  );
  let lastTransactionId = null;
  const queryTransactionSnap = await getDocs(q_Transaction);
  queryTransactionSnap.forEach((doc) => {
    lastTransactionId = doc.data().transactionId;
  });
  return lastTransactionId;
};

const getNextTransactionId = (transactionId) => {
  return transactionId.split(TRANSACTION_HEAD)[1];
};

const addTransaction = async (payload) => {
  try {
    await setDoc(
      doc(db, COLLECTIONS.TRANSACTION_DETAILS, payload.transactionId),
      payload
    );
    return true;
  } catch (e) {
    return false;
  }
};

const updateTransactionStatus = async (transactionUpdatePayload) => {
  try {
    await updateDoc(
      doc(
        db,
        COLLECTIONS.TRANSACTION_DETAILS,
        transactionUpdatePayload.transactionId
      ),
      {
        status: transactionUpdatePayload.status,
      }
    );
    return {
      updateStatus: true,
    };
  } catch (e) {
    return {
      updateStatus: true,
    };
  }
};

export {
  updateTransactionStatus,
  getOrderHostoryInArray,
  addTransaction,
  getNextTransactionId,
  getLastTransactionId,
  getAllTransactions,
};
