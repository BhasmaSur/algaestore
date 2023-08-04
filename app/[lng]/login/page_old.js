"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setCookieDetails } from '../../utils/loginUtils';
import httpService from '../../services/httpservice';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    const userDetails = {
      username,
      password
    }
    httpService(CONTROLLERS.login, METHODS.post, userDetails, API).then((res)=>{
      if(res){
        setCookieDetails({
          username: username,
          jwtToken : res.data.jwtToken
        });
        router.push('/');
      }
    })
    
    
  };
  return (
    <div>username
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      password
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Login</button>
    </div>
  );
};

export default Page;
