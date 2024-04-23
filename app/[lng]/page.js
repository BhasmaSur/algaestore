import { Footer, Navbar } from '../components';
import { About, Hero, Stats } from '../sections';
import { useTranslation } from '../i18n';
import { languages } from '../i18n/settings';
import Sponsers from '../sections/Sponsers';
import Home from './tempTest/page';

const Page = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  const aboutObject = {
    aboutAlgaeStore: t('aboutAlgaeStore'),
    introducing: t('introducing'),
    aboutAlgaeStorePara: t('aboutAlgaeStorePara'),
    title: t('title'),
    premiumHub: t('premiumHub'),
  };

  const statsObject = {
    stats: t('stats'),
    sellers: t('sellers'),
    sellersPara: t('sellersPara'),
    exploreAllSellers: t('exploreAllSellers'),
    buyers: t('buyers'),
    buyersPara: t('buyersPara'),
    exploreAllBuyers: t('exploreAllBuyers'),
    products: t('products'),
    productsPara: t('productsPara'),
    exploreAllProducts: t('exploreAllProducts'),
  };

  const sponsersObject = {
    poweredBy: t('poweredBy'),
  };

  const navObject = {
    about: t('about'),
    buyers: t('buyers'),
    suppliers: t('suppliers'),
    products: t('products'),
    contactUs: t('contactUs'),
    logIn: t('logIn'),
  };
  const heroObject = {
    algae: t('Algae'),
    store: t('Store'),
    premiumHub: t('premiumHub'),
    goToStore: t('goToStore'),
    algaeStoreForFarmers: t('algaeStoreForFarmers'),
    sellersPara: t('sellersPara'),
    connectWithUs: t('connectWithUs'),
    algaeStoreForBuyers: t('algaeStoreForBuyers'),
    buyersPara: t('buyersPara'),
  };
  const languageList = [];
  languages.map((l) => {
    languageList.push(t(l));
  });

  const footerObject = {
    title: t('title'),
    selectLanguage: t('Select Language'),
    languageList,
  };

  return (
    <div className="bg-primary-white overflow-hidden">
      <Hero
        heroObject={heroObject}
        navObject={navObject}
        statsObject={statsObject}
        aboutObject={aboutObject}
        footerObject={footerObject}
        sponsersObject={sponsersObject}
      />
      {/* <About aboutObject={aboutObject} /> */}
      {/* <Stats statsObject={statsObject} /> */}
      {/* <video autoPlay muted loop style={{ width: '100%', position: 'fixed' }}>
        <source src="/algaestorefull.mp4" />
      </video>
      <Navbar navObject={navObject} />
      <Hero heroObject={heroObject} />

      <div className="relative">
        <About aboutObject={aboutObject} />
        <div className="gradient-03 z-0" />
        <Sponsers sponsersObject={sponsersObject} />
        <Stats statsObject={statsObject} />
      </div>
      <Footer footerObject={footerObject} /> */}
      {/* <Home/> */}
    </div>
  );
};

export default Page;
