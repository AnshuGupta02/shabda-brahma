import AppLogo from '../../assets/AppLogo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={AppLogo} alt="Śabda Brahma" />
      </a>

      <div className="navbar-links">
        <a href="#explore">Explore</a>
        <a href="#about">About</a>
      </div>
    </nav>
  )
}

export default Navbar