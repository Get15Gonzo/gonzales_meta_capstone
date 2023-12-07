import bruschetta from '../images/bruchetta.svg'
import greekSalad from '../images/greek-salad.jpg'
import lemonDessert from '../images/lemon-dessert.jpg'
import bicycle from '../images/bicycle-vector.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

const navigate = useNavigate()

    return (
        <footer>
            <heading>
                <p className="footer--title">This Weeks Specials!</p>
                <button className="btn" onClick={()=>{navigate('/menu')}}>Online Menu</button>
            </heading>
            <cards>
                <section className="footer--card">
                    <img className="card--img" src={greekSalad} alt="Greek salad" loading='lazy' />
                    <cardtitle>
                        <p>Greek Salad</p>
                        <p className="card--price">12.99$</p>
                    </cardtitle>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunch garlic and rosemary croutons.</p>
                    <cardfooter>
                        <p id="card--delivery">Order A delivery</p>
                        <img src={bicycle} alt="bicycle delivery icon" width="25px" height="25px" loading='lazy' />
                    </cardfooter>
                </section>
                <section  className="footer--card">
                    <img className="card--img" src={bruschetta} alt="bruschetta is bread with different toppings on it" loading='lazy' />
                    <cardtitle>
                        <p>Bruschetta</p>
                        <p className="card--price">12.99$</p>
                    </cardtitle>
                    <p>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. <br/> <br/> <br/> </p>
                    <cardfooter>
                        <p id="card--delivery">Order A delivery</p>
                        <img src={bicycle} alt="bicycle delivery icon" width="25px" height="25px" loading='lazy' />
                    </cardfooter>
                </section>
                <section  className="footer--card">
                    <img className="card--img" src={lemonDessert} alt="lemon dessert" loading='lazy' />
                    <cardtitle>
                        <p>Lemon Dessert</p>
                        <p className="card--price">12.99$</p>
                    </cardtitle>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined <br/> <br/> </p>
                    <cardfooter>
                        <p id="card--delivery">Order A delivery</p>
                        <img src={bicycle} alt="bicycle delivery icon" width="25px" height="25px" loading='lazy' />
                    </cardfooter>
                </section>
            </cards>
        </footer>

    )
}

export default Footer