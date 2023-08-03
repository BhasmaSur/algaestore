import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)
const supportedImages = ['png','jpg','svg','ico']
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

const cookieName = 'i18next'
const protectedPages = ['home', 'contact-us', 'market'];
export function middleware(req) {
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng
  let verify = req.cookies.get('jwtToken');
  let url = req.url;

  if (!verify && protectedPages.some((pPage) => url.includes(pPage))) {
    return NextResponse.redirect(`https://algaestore.in/${lng}/login`);
  }
  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    if(req.nextUrl.pathname.includes('.jpg') || req.nextUrl.pathname.includes('.png') || req.nextUrl.pathname.includes('.svg'))
      return NextResponse.redirect(new URL(`/en${req.nextUrl.pathname}`, req.url))
    else if(req.nextUrl.pathname.includes('/api/')){
      return NextResponse.redirect(new URL(`/${req.nextUrl.pathname}`, req.url))
    }else{
      return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
    }
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}