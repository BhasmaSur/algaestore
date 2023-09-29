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
    <Navbar navObject={heroObject}/>
    <Hero heroObject={heroObject}/>
    </div>

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Sponsers/>
      <Stats/>
    </div>
    <Footer footerObject={footerObject}/>
  </div>
);}

export default Page;
