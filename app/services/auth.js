// import { useCollection } from 'react-firebase-hooks/firestore';
import { COLLECTIONS } from '../constants/collectionDetails';
import { getCookieObject } from '../utils/loginUtils';
import { Encrypt } from './encryptService';
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
import jwt from 'jsonwebtoken';

//sign up user
const addUser = async (userDetails) => {
  const userDoc = doc(db, COLLECTIONS.USER_CREDS, userDetails.username);
  const userSnap = await getDoc(userDoc);
  if (userSnap.exists()) {
    return null;
  } else {
    const encryptedPassword = await Encrypt.cryptPassword(userDetails.password);
    let payload = {
      username: userDetails.username,
      password: encryptedPassword,
      type : userDetails.type
    };
    await setDoc(
      doc(db, COLLECTIONS.USER_CREDS, userDetails.username),
      payload
    );
    const jwtToken = jwt.sign(
      {
        username: userDetails.username,
        admin: false,
      },
      process.env.JWT_KEY
    );
    return 'Bearer ' + jwtToken;
  }
};

//login user
const authenticateUser = async (userDetails) => {
  let encryptedPassword = '';
  let type = '';
  const q = query(
    collection(db, COLLECTIONS.USER_CREDS),
    where('username', '==', userDetails.username)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    encryptedPassword = doc.data().password;
    type = doc.data().type;
  });
  const userVerified = await Encrypt.comparePassword(
    userDetails.password,
    encryptedPassword
  );
  if(userVerified){
    const jwtToken = jwt.sign(
        {
          username: userDetails.username,
          admin: false,
        },
        process.env.JWT_KEY
      );
    return {
      jwtToken : 'Bearer ' + jwtToken,
      type : type
    }
  }
  return null;
};

const getUserById = async (userID) => {
  const userDoc = doc(db, COLLECTIONS.USER_CREDS, userID);
  const userSnap = await getDoc(userDoc);
  return userSnap;
};

const getUserDetailsFromCookie = ()=>{
  const userDetails = getCookieObject(); 
  if(userDetails.jwtToken && userDetails.emailId){
    return userDetails;
  }else{
    return null;
  }
}

export { addUser, authenticateUser, getUserById, getUserDetailsFromCookie };
