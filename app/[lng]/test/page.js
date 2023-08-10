'use client';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

// const createQueryString = useCallback(
//   (name, value) => {
//     const params = new URLSearchParams(searchParams);
//     params.set(name, value);

//     return params.toString();
//   },
//   [searchParams]
// );

function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const testingParams = () => {
    // router.push(pathname + createQueryString('sort', 'asc'));
    router.push(pathname + '/user?search=lol')
  };
  
  return (
    <>
      <h1 onClick={testingParams}>test</h1>
      <Link href={{ pathname: '/test/user', query: { keyword: 'source freeze' } }}>
        Search
      </Link>
    </>
  );
}

export default Page;
