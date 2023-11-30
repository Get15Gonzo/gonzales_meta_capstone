import restaurantImg from '../images/restaurant.jpg'
import restaurantChef from '../images/restaurant-chef.jpg'
import restaurantChefs from '../images/restaurant-chefs.jpg'
import '../App.css';

const FormFooter = () => {
    return (
        <formfooter>
            <section className='form--images'>
                <img src={restaurantImg} className='form--image' />
                <img src={restaurantChef} className='form--image' />
                <img src={restaurantChefs} className='form--image' />
            </section>
        </formfooter>
    )
}

export default FormFooter;