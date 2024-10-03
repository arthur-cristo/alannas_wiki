import '../style/Gallery.css';
import PropTypes from 'prop-types';

const Gallery = ({ data }) => {

    return (
        <div className='gallery'>
            {data.map((item, index) => (
                <div key={index} className={'slide-container slide'+index}>
                    <img src={item.src} alt={item.title} className='slide' />
                    <p className='title'>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

Gallery.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired
};

export default Gallery