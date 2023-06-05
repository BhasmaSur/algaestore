import { Footer, Navbar } from '../components';
import {
  About,
  Hero,
  Stats,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Stats/>
    </div>
    <Footer />
  </div>
);

export default Page;
