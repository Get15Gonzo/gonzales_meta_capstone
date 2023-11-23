import littleLemon from '../images/Logo.svg'

const Nav = () => {
    return (
        <nav>
            <img className="nav--image" src={littleLemon} alt="Little Lemon Logo" title="Little Lemon Logo" />
            <ul className="nav--links">
                <li className="nav--list">
                    <a href="/">Home</a>
                </li>
                <li className="nav--list">
                    <a href="/about">About</a>
                </li>
                <li className="nav--list">
                    <a href="/menu">Menu</a>
                </li>
                <li className="nav--list">
                    <a href="/reservations">Reservations</a>
                </li>
                <li className="nav--list">
                    <a href="/order-online">Order Online</a>
                </li>
                <li className="nav--list">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
