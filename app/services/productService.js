import { COLLECTIONS } from '../constants/collectionDetails';
import { USER_SELLER_ROLE } from '../constants/userConstants';
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

const getProductsInArray = async (producList) => {
  const q_Products = query(
    collection(db, COLLECTIONS.PRODUCT_DETAILS),
    where('product_id', 'in', producList)
  );
  let publishedPrductsData = [];
  const queryProductSnap = await getDocs(q_Products);
  queryProductSnap.forEach((doc) => {
    publishedPrductsData.push(doc.data());
  });
  return publishedPrductsData;
};

export { getProductsInArray };
