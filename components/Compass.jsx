import { useState, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";
import '../style/Compass.css';

const Compass = () => {

    const [currentPosition, setCurrentPosition] = useState({ latitude: null, longitude: null });
    const [rotation, setRotation] = useState(0);
    const [targetLat, targetLon] = [-12.8898846, -38.319197]

    // get the current location
    useEffect(() => {
        const geoSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ latitude, longitude });
        };

        const geoError = (error) => {
            console.error("Error getting location:", error);
        };

        navigator.geolocation ?
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError) :
            console.error("Geolocation is not supported by this browser.");
    }, []);

    // Function to calculate the azimuth between the current position and the target
    const calculateAzimuth = (lat1, lon1, lat2, lon2) => {
        const rad = Math.PI / 180;

        const dLon = (lon2 - lon1) * rad;
        const y = Math.sin(dLon) * Math.cos(lat2 * rad);
        const x = Math.cos(lat1 * rad) * Math.sin(lat2 * rad) - Math.sin(lat1 * rad) * Math.cos(lat2 * rad) * Math.cos(dLon);

        const azimuth = Math.atan2(y, x) * (180 / Math.PI);
        return (azimuth + 360) % 360;
    };

    // Function to update the heading (device direction)
    useEffect(() => {
        const handleOrientation = (event) => {
            let compassHeading = event.alpha;
          
            if (typeof compassHeading !== 'number') {
              console.error("Device orientation not available or supported.");
              return;
            }
          
            if (currentPosition.latitude !== null && currentPosition.longitude !== null) {
              const azimuth = calculateAzimuth(currentPosition.latitude, currentPosition.longitude, targetLat, targetLon);
              const newRotation = (azimuth - compassHeading + 360) % 360;
              setRotation(newRotation);
            }
        };

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation);
        } else {
            console.error("Device orientation is not supported by this browser.");
        }

        return () => window.removeEventListener('deviceorientation', handleOrientation);
    }, [currentPosition, targetLat, targetLon]);

    return (
        <div id="compass-container">
            <FaArrowDown
                id="compass"
                alt="Compass"
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        </div>
    );
};

export default Compass;