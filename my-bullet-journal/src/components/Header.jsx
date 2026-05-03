import logo from "../images/Designer.png"
import '../stlyes/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="header_h1">Soraya's Bullet Journal</h1>
    </header>
  )
}

export default Header
