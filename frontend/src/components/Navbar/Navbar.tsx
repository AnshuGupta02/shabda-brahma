import { Link } from 'react-router-dom'

import AppLogo from '../../assets/AppLogo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={AppLogo} alt="Śabda Brahma" />
      </Link>

      <div className="navbar-links">
        <Link to="/#explore">Explore</Link>
        <Link to="/#about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar