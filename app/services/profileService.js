import { COLLECTIONS } from "../constants/collectionDetails";
import { USER_SELLER_ROLE } from "../constants/userConstants";
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
import { getProductsInArray } from "./productService";
import { getOrderHostoryInArray } from "./transactonService";

const getSellerProfileById = async (userID) => {
    const q = query(
        collection(db, COLLECTIONS.PROFILE_DETAILS),
        where('username', '==', userID)
      );
      let userProfileData = null;
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        userProfileData = doc.data();
        if(userProfileData.type === USER_SELLER_ROLE){
            userProfileData.username = "*****@*****",
            userProfileData.phone = "*********"
        }        
      });
      const publishedProducts = await getProductsInArray(userProfileData.publishedProducts)
      userProfileData.publishedProducts = [];
      userProfileData.publishedProducts = publishedProducts;
      return userProfileData;
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
      const orderHistory = await getOrderHostoryInArray(userProfileData.orderHistory);
      const wishlist = await getProductsInArray(userProfileData.wishlist)
      userProfileData.orderHistory = [];
      userProfileData.wishlist = [];
      userProfileData.orderHistory = orderHistory;
      userProfileData.wishlist = wishlist;
      return userProfileData;
  };

  export { getSellerProfileById, getBuyerProfileById };