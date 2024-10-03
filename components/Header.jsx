import { useState } from 'react';
import '../style/Header.css';
import { CiMenuBurger } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const Header = ({ onHomeClick, onPhotosClick, onDrawsClick, onQuizClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <h1>Alanna&apos;s Wiki</h1>
      <nav className="desktop">
        <ul>
          <li onClick={onHomeClick}>Home</li>
          <li onClick={onPhotosClick}>Fotos</li>
          <li onClick={onQuizClick}>Quiz</li>
          <li onClick={onDrawsClick}>Desenhos</li>
        </ul>
      </nav>
      <nav className="mobile">
        <CiMenuBurger className="menu-burger" onClick={toggleDropdown} />
        <ul className={isDropdownOpen ? 'list list-open' : 'list list-hidden'}>
          <li onClick={onHomeClick}>Home</li>
          <li onClick={onPhotosClick}>Fotos</li>
          <li onClick={onQuizClick}>Quiz</li>
          <li onClick={onDrawsClick}>Desenhos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
