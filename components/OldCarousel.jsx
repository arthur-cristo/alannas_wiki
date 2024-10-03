import '../style/OldCarousel.css';
import PropTypes from 'prop-types';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useState, useEffect } from 'react';

const OldCarousel = ({ data }) => {

    const [slide, setSlide] = useState(0);
    const [timeout, setTimeout] = useState(null);

    const handleIndicatorClick = (index) => {
        setSlide(index);
    }

    const slideLength = data.length;

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setSlide(slide === 0 ? slideLength - 1 : slide - 1);
        } else {
            setSlide(slide === slideLength - 1 ? 0 : slide + 1);
        }
    }

    useEffect(() => {
        clearTimeout(timeout);
        setTimeout(() => {
            setSlide(slide === slideLength - 1 ? 0 : slide + 1);
        }, 5000);
    }, []);

    return (
        <div className='carousel'>
            <FaChevronCircleLeft className='arrow arrow-left' onClick={() => handleArrowClick('left')} />
            {data.map((item, index) => (
                <div key={index} className={slide === index ? 'slidee-container' : 'slidee-container-hidden'}>
                    <img src={item.src} alt={item.title} className='slidee' />
                        <p className='title'>{item.title}</p>
                </div>
            ))}
            <FaChevronCircleRight className='arrow arrow-right' onClick={() => handleArrowClick('right')} />

            <span className='indicators'>
                {data.map((_, index) => (
                    <button key={index} onClick={() => handleIndicatorClick(index)} className={slide === index ? 'indicator-slide' : 'indicator'} />
                ))}
            </span>
        </div>
    )
}

OldCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired
};

export default OldCarousel