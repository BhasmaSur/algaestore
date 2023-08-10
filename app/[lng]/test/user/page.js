"use client";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  // const search = router.query()
  console.log(search)
  return (
    <>
      {search}
    </>
  )
}



export default Page;