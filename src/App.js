import './App.css';
import FullTxtSection from './Components/FullTxtSection';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import TxtImgSection from './Components/TxtImgSection';
import TxtImgSection2 from './Components/TxtImgSection2';
function App() {
  return (
    <div className='relative max-w-[1200px] w-full mx-auto'>
      <Navbar />
      <main >
        <Hero />
        <TxtImgSection />
        <TxtImgSection2 />
        <FullTxtSection />
      </main>
    </div>    

  );
}

export default App;
