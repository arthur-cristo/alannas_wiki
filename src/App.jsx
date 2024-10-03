import { useRef, useEffect } from 'react'

import Header from '../components/Header'
import Home from '../components/Home'
import PhotosGallery from '../components/PhotosGallery'
import Quiz from '../components/Quiz'
import DrawsGallery from '../components/DrawsGallery'
import Orientation from 'react-native-orientation-locker';

import './App.css'

function App() {

  const homeRef = useRef(null);
  const photosRef = useRef(null);
  const quizRef = useRef(null);
  const drawsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <div className='bg'>
      <Header
        onHomeClick={() => scrollToSection(homeRef)}
        onPhotosClick={() => scrollToSection(photosRef)}
        onQuizClick={() => scrollToSection(quizRef)}
        onDrawsClick={() => scrollToSection(drawsRef)}
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
      <div ref={drawsRef} className='draws'>
        <DrawsGallery />
      </div>
    </div>
  )
}

export default App
