import restaurantFood from '../images/restaurant-food.jpg'
import { Routes, Link, Route, useNavigate} from 'react-router-dom'
import Form from './Form.js'

const Main = () => {
    const navigate = useNavigate();
    return (
        <main>
            <section className="main--one">
                <h1 className="main--title">Little Lemon</h1>
                <h3 className="main--subtitle">Chicago</h3>
                <p className="main--text"> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button className="btn" onClick={()=>{navigate('/reservations')}}>
                    Reserve a Table
                </button>
            </section>
            <section className="main--two">
                    <img className="main--img" src={restaurantFood} alt="food" />
            </section>
        </main>
    )
}

export default Main