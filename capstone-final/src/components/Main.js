import restaurantFood from '../images/restaurant-food.jpg'

const Main = () => {
    return (
        <main>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button>
                Reserve a table
            </button>
            <img src={ restaurantFood } alt="Food made by the chefs at Little Lemon" title="Amazing Food" height="500px" width="300px" />
        </main>

    )
}

export default Main