"use client";
import Link from 'next/link'
import React, {useCallback, useState} from 'react';


function Page({ params: { lng } }) {

  const [market, setMarket] = useState("AlgaeStore")

  return (
    <>
      <h1>Hi from {market} market page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}



export default Page;