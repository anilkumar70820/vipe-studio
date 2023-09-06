
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'
import Hero from './components/Hero';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Preloader from './components/Preloader';
import AgileWordpress from './components/AgileWordpress';
import Featured from './components/Featured';
import WordPressPartner from './components/WordPressPartner';
import VipeStudioServices from './components/VipeStudioServices';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop'
import SuccesGuide from './components/SuccesGuide';

function App() {
  const [preloader, setPreloader] = useState(true)
  useEffect(() => {
    Aos.init({once:true,})
setTimeout(()=>{
  setPreloader(false);
  document.body.classList.remove('overflow-hidden')

},3000);
document.body.classList.add('overflow-hidden')
  }, [])
  return (
    <>
      {preloader && <Preloader/>}
      <Hero/>
      <Featured/>
      <VipeStudioServices/>
      <WordPressPartner/>
      <AgileWordpress/>
      <SuccesGuide/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
