     
const Nav = () => {
    return (
        <nav>
            <img className="nav--image" src="littleLemon.svg" alt="Little Lemon Logo" title="Little Lemon Logo" />
            <ul className="nav--links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/about">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
