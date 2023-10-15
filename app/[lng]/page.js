import { Footer, Navbar } from '../components';
import {
  About,
  Hero,
  Stats,
} from '../sections'
import { useTranslation } from '../i18n'
import { languages } from '../i18n/settings';
import Sponsers from '../sections/Sponsers';

const Page = async ({params : {lng}}) => {
  const { t } = await useTranslation(lng)

  const aboutObject = {
    aboutAlgaeStore : t('aboutAlgaeStore'),
    introducing : t('introducing'),
    aboutAlgaeStorePara : t('aboutAlgaeStorePara'),
    title : t('title'),
    premiumHub : t('premiumHub')
  }

  const statsObject = {
    stats : t('stats'),
    sellers : t('sellers'),
    sellersPara : t('sellersPara'),
    exploreAllSellers : t('exploreAllSellers'),
    buyers : t('buyers'),
    buyersPara : t('buyersPara'),
    exploreAllBuyers : t('exploreAllBuyers'),
    products : t('products'),
    productsPara : t('productsPara'),
    exploreAllProducts : t('exploreAllProducts'),
  }

  const sponsersObject = {
    poweredBy : t('poweredBy'),
  }

  const navObject = {
    about: t('about'),
    buyers: t('buyers'),
    suppliers: t('suppliers'),
    products: t('products'),
    contactUs: t('contactUs'),
    logIn: t('logIn')
  }
  const heroObject ={
    algae: t('Algae'),
    store: t('Store')
  }
  const languageList = []
  languages.map((l)=>{
    languageList.push(t(l))
  })

  const footerObject ={
    title: t('title'),
    selectLanguage: t('Select Language'),
    languageList
  }

  return (
  <div className="bg-primary-white overflow-hidden">
    <div className="bg-[url('/nature-2616239_1920.jpg')]">
    <Navbar navObject={navObject}/>
    <Hero heroObject={heroObject}/>
    </div>

    <div className="relative">
      <About aboutObject={aboutObject}/>
      <div className="gradient-03 z-0" />
      <Sponsers sponsersObject={sponsersObject}/>
      <Stats statsObject={statsObject}/>
    </div>
    <Footer footerObject={footerObject}/>
  </div>
);}

export default Page;
