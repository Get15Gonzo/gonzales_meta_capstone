import littleLemon from '../images/Logo.svg'
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import Form from './Form.js'

const Nav = () => {
    return (
        <nav>
            <img className="nav--image" src={littleLemon} alt="Little Lemon Logo" title="Little Lemon Logo" />
            <ul className="nav--links">
                <Link to="/" className="nav--list">
                    Home
                </Link>
                <Link to="/menu" className="nav--list">
                    Menu
                </Link>
                <Link to="/reservations" className="nav--list">
                    Reservations
                </Link>
                <Link to="/login" className="nav--list">
                    Login
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

export default Nav
