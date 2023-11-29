import littleLemon from '../images/Logo.svg'
import { Link }  from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <img className="nav--image" src={littleLemon} alt="Little Lemon Logo" title="Little Lemon Logo" />
            <ul className="nav--links">
                <Link to="/" className="nav--list">
                    Home
                </Link>
                <Link to="about" className="nav--list">
                    About
                </Link>
                <Link to="/menu" className="nav--list">
                    Menu
                </Link>
                <Link to="/reservations" className="nav--list">
                    Reservations
                </Link>
                <Link to="/order-online" className="nav--list">
                    Order Online
                </Link>
                <Link to="/login" className="nav--list">
                    Login
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
