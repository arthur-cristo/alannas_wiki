import '../style/Header.css'

// eslint-disable-next-line react/prop-types
const Header = ({ onHomeClick, onPhotosClick }) => {
  return (
    <header className="header">
      <h1>Alanna&apos;s Wiki</h1>
      <nav>
        <ul>
          <li onClick={onHomeClick}>Home</li>
          <li onClick={onPhotosClick}>Fotos</li>
          <li>Desenhos</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header