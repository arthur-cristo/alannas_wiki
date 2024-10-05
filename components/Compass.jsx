import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { FaArrowLeft } from "react-icons/fa";
import "../style/Compass.css";

export default function MinimalCompass() {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  const [pointDegree, setPointDegree] = useState(0);
  const [compassRotation, setCompassRotation] = useState(0);

  // Calculate the degree to the point
  const calcDegreeToPoint = (latitude, longitude) => {
    const target = {
      lat: -12.8936592,
      lng: -38.319197
    };
    const rad = Math.PI / 180.0;
    const phiK = target.lat * rad;
    const lambdaK = target.lng * rad;
    const phi = latitude * rad;
    const lambda = longitude * rad;

    const psi =
      (180.0 / Math.PI) *
      Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
      );
    return Math.round(psi);
  };

  // Start the compass when rendered
  useEffect(() => {
    const locationHandler = (coords) => {
      const { latitude, longitude } = coords;
      const resP = calcDegreeToPoint(latitude, longitude);
      setPointDegree(resP < 0 ? resP + 360 : resP);
    };

    if (coords) {
      locationHandler(coords);
    }

    const startCompass = async () => {
      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handler, true);
      } else {
        console.error("Device orientation is not supported by this browser.");
      }
    };

    const handler = (e) => {
      const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      setCompassRotation(compass);
    };

    startCompass();

    return () => window.removeEventListener("deviceorientation", handler);
  }, [coords]);

  return (
    <div className="minimal-compass">
      <FaArrowLeft
        style={{ transform: `rotate(${-compassRotation}deg)` }}
        className="compass-icon"
      />
    </div>
  );
}
