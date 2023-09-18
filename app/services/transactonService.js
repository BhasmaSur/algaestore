import { COLLECTIONS } from '../constants/collectionDetails';
import { db } from './firebaseService';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

const getOrderHostoryInArray = async (ordersList) => {
  let transactionList = [];
  if(ordersList.length > 0){
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

export { getOrderHostoryInArray };
