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
  writeBatch,
} from 'firebase/firestore';
import { getProductsInArray } from './productService';
import { getOrderHostoryInArray } from './transactonService';

const getSellerProfileById = async (userID) => {
  const q = query(
    collection(db, COLLECTIONS.PROFILE_DETAILS),
    where('username', '==', userID)
  );
  let userProfileData = null;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userProfileData = doc.data();
  });
  if (userProfileData) {
    if (userProfileData.publishedProducts) {
      const publishedProducts = await getProductsInArray(
        userProfileData.publishedProducts
      );
      userProfileData.publishedProducts = [];
      userProfileData.publishedProducts = publishedProducts;
    }
    return userProfileData;
  } else {
    return {};
  }
};

const getAllSeller = async () => {
  const q = query(
    collection(db, COLLECTIONS.PROFILE_DETAILS),
    where('type', '==', 'USER_SELLER')
  );
  let userProfileData = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userProfileData.push(doc.data());
  });
  if (userProfileData) {
    return userProfileData;
  } else {
    return {};
  }
};

const getBuyerProfileById = async (userID) => {
  const q = query(
    collection(db, COLLECTIONS.PROFILE_DETAILS),
    where('username', '==', userID)
  );
  let userProfileData = null;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userProfileData = doc.data();
  });
  if (userProfileData) {
    const orderHistory = await getOrderHostoryInArray(
      userProfileData.orderHistory
    );
    const wishlist = await getProductsInArray(userProfileData.wishlist);
    userProfileData.orderHistory = [];
    userProfileData.wishlist = [];
    userProfileData.orderHistory = orderHistory;
    userProfileData.wishlist = wishlist;
    return userProfileData;
  } else {
    return {};
  }
};

const getAllBuyer = async () => {
  const q = query(
    collection(db, COLLECTIONS.PROFILE_DETAILS),
    where('type', '==', 'USER_BUYER')
  );
  let userProfileData = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userProfileData.push(doc.data());
  });
  if (userProfileData) {
    return userProfileData;
  } else {
    return {};
  }
};

const saveProfile = async (profileData) => {
  try {
    await setDoc(
      doc(db, COLLECTIONS.PROFILE_DETAILS, profileData.username),
      profileData
    );
    return true;
  } catch (e) {
    return false;
  }
};

const saveBatchProfiles = async (usersBatch) => {
  try {
    const batch = writeBatch(db);
    usersBatch.forEach((docu) => {
      var docRef = doc(db, COLLECTIONS.PROFILE_DETAILS, docu.username);
      batch.set(docRef, docu);
    });
    await batch.commit();
    return {
      batchRunStaus: true,
    };
  } catch (e) {
    console.log('Error : ', e);
    return {
      batchRunStaus: false,
    };
  }
};

export {
  saveBatchProfiles,
  getSellerProfileById,
  getAllSeller,
  getBuyerProfileById,
  getAllBuyer,
  saveProfile,
};
