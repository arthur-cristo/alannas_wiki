import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import '../style/MyCarousel.css';

const MyCarousel = ({ data }) => {
    return (
        <div>
            <Carousel className='carousel' autoPlay infiniteLoop centerMode>
                {data.map((item, index) => (
                    <div key={index}>
                        <img className='carousel-img' src={item.src} alt={item.title} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}


MyCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string
    })).isRequired
};

export default MyCarousel