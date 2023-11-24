import restaurantFood from '../images/restaurant-food.jpg'

const Main = () => {
    return (
        <main>
            <section className="main--one">
                <h1 className="main--title">Little Lemon</h1>
                <h3 className="main--subtitle">Chicago</h3>
                <p className="main--text"> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button className="main--btn">
                    Reserve a Table
                </button>
            </section>
            <section className="main--two">
                    <img src={restaurantFood} alt="food" height="300px" width="200px" />
            </section>
        </main>
    )
}

export default Main