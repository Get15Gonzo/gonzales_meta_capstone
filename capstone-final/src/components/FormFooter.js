import restaurantImg from '../images/restaurant.jpg'
import restaurantChef from '../images/restaurant-chef.jpg'
import restaurantChefs from '../images/restaurant-chefs.jpg'
import '../App.css';

const FormFooter = () => {
    return (
        <section>
            <section className='form--images'>
                <img src={restaurantImg} alt="Little Lemon Patio" className='form--image' loading='lazy' />
                <img src={restaurantChef} alt="Little Lemon's Head Chef Mario"className='form--image' loading='lazy' />
                <img src={restaurantChefs} alt="Little Lemon Chefs" className='form--image' loading='lazy' />
            </section>
        </section>
    )
}

export default FormFooter;