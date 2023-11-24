

const Footer = () => {
    return (
        <footer>
            <heading>
                <p className="footer--title">This Weeks Specials!</p>
                <button className="btn">Online Menu</button>
            </heading>
            <cards>
                <section>
                    <p>Greek Salad</p>
                    <p>12.99$</p>
                    <p>The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunch garlic and rosemary croutons.</p>
                    <p>Order A delivery</p>
                    <img src="bicycle-vector.png" alt="bicycle delivery icon" />
                </section>
                <section>
                    <p>Bruschetta</p>
                    <p>12.99$</p>
                    <p>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p>Order A delivery</p>
                    <img src="bicycle-vector.png" alt="bicycle delivery icon" />
                </section>
                <section>
                    <p>Lemon Dessert</p>
                    <p>12.99$</p>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined</p>
                    <p>Order A delivery</p>
                    <img src="bicycle-vector.png" alt="bicycle delivery icon" />
                </section>
            </cards>
        </footer>

    )
}

export default Footer