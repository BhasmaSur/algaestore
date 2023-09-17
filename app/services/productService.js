import { COLLECTIONS } from '../constants/collectionDetails';
import { PRODUCT_HEAD } from '../constants/productDetails';
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
  orderBy,
  limit,
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

const getLastProductId = async () =>{
  const q_Products = query(
    collection(db, COLLECTIONS.PRODUCT_DETAILS),
    orderBy("product_id", "desc"),
    limit(1)
  );
  let lastProductId = null;
  const queryProductSnap = await getDocs(q_Products);
  queryProductSnap.forEach((doc) => {
    lastProductId = doc.data().product_id;
  });
  return lastProductId;
}

const getNextProductId = (productId) =>{
  return productId.split(PRODUCT_HEAD)[1];
}

const saveProduct = async (payload) =>{
  try {
    await setDoc(
      doc(db, COLLECTIONS.PRODUCT_DETAILS, payload.product_id),
      payload
    );
    return true;
  } catch (e) {
    return false;
  }
}

export { getProductsInArray, getLastProductId, getNextProductId, saveProduct};
