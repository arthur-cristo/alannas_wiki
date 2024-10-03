import { useRef } from 'react'

import Header from '../components/Header'
import Home from '../components/Home'
import PhotosGallery from '../components/PhotosGallery'

import './App.css'

function App() {

  const homeRef = useRef(null);
  const photosRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='bg'>
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onPhotosClick={() => scrollToSection(photosRef)}
      />
      <div ref={homeRef} className='home'>
        <Home />
      </div>
      <div ref={photosRef} className='photos'>
        <PhotosGallery />
      </div>
      {/*  <PhotosGallery />
      <DrawsGalerry />
      <Footer /> */}
    </div>
  )
}

export default App
