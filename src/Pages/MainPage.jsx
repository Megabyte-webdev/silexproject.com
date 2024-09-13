import React from 'react'
import FullTxtSection from '../Components/FullTxtSection';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar'
import TxtImgSection from '../Components/TxtImgSection';
import TxtImgSection2 from '../Components/TxtImgSection2';
import InfoSection from '../Components/InfoSection';
import Services from '../Components/Services';

const MainPage = () => {
  return (
    <div className='relative max-w-[1200px] w-full mx-auto'>
      <Navbar />
      <main >
        <Hero />
        <TxtImgSection />
        <TxtImgSection2 />
        <FullTxtSection />
        <InfoSection />
        <Services />
      </main>
    </div>    
  )
}

export default MainPage