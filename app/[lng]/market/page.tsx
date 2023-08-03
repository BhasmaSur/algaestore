import Link from 'next/link'

export default function Page({ params: { lng } }) {
  return (
    <>
      <h1>Hi from market page!</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
    </>
  )
}