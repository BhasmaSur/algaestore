import { Footer, Navbar } from '../components';
import {
  About,
  Hero,
  Stats,
} from '../sections'
import { useTranslation } from '../i18n'
import { languages } from '../i18n/settings';

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
  <div className="bg-primary-black overflow-hidden">
    <Navbar navObject={heroObject}/>
    <Hero heroObject={heroObject}/>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Stats/>
    </div>
    <Footer footerObject={footerObject}/>
  </div>
);}

export default Page;
