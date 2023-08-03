"use client";
// import { ADMIN_AUTHENTICATION } from '@/lib/demo-data/loginDemoData';
// import { setCookieDetails } from '@/lib/utils/loginFunctions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ADMIN_AUTHENTICATION } from '../../demo-data/login-data';
import { setCookieDetails } from '../../utils/loginUtils';
import httpService from '../../services/httpservice';
import { API, APIS, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { USER_BUYER_ROLE, USER_FARMER_ROLE } from '../../constants/userConstants';

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signUp = () => {
    let userDetails = {
      username,
      password,
      type : USER_FARMER_ROLE
    }
    httpService(CONTROLLERS.signup, METHODS.post, userDetails, API).then((res)=>{
      if(res){
        const jwtToken = res?.data?.jwtToken
        setCookieDetails({
          username,
          jwtToken
        });
        router.push('/');
      }
    })
  };
  return (
    <div>
      username
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      password
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>signup</button>
    </div>
  );
};

export default Page;
