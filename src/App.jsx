import { useRef } from 'react'

import Header from '../components/Header'
import Home from '../components/Home'
import PhotosGallery from '../components/PhotosGallery'
import Quiz from '../components/Quiz'

import './App.css'

function App() {

  const homeRef = useRef(null);
  const photosRef = useRef(null);
  const quizRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className='bg'>
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onPhotosClick={() => scrollToSection(photosRef)}
        onQuizClick={() => scrollToSection(quizRef)}
      />
      <div ref={homeRef} className='home'>
        <Home />
      </div>
      <div ref={photosRef} className='photos'>
        <PhotosGallery />
      </div>
      <div ref={quizRef} className='quiz'>
        <Quiz />
      </div>
      {/*  <PhotosGallery />
      <DrawsGalerry />
      <Footer /> */}
    </div>
  )
}

export default App
