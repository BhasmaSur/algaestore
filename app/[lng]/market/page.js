"use client";
import React, {useState} from 'react';
import { removeAllCookies } from '../../utils/loginUtils';
import { useRouter } from 'next/navigation';

function Page({ params: { lng } }) {
  const router = useRouter();
  const [market, setMarket] = useState("AlgaeStore")
  const logout = ()=> {
      removeAllCookies()
      router.push('/');
  }
  return (
    <>
      <h1>Hi from {market} market page!</h1>
      <button onClick={logout}>logout</button>
    </>
  )
}



export default Page;