import restaurantImg from '../images/restaurant.jpg'
import restaurantChef from '../images/restaurant-chef.jpg'
import restaurantChefs from '../images/restaurant-chefs.jpg'

const FormFooter = () => {
    return (
        <>
            <section className='form--images'>
                <img src={restaurantImg} className='form--image' />
                <img src={restaurantChef} className='form--image' />
                <img src={restaurantChefs} className='form--image' />
            </section>
            <section className>
                <button className=" btn form--btn">
                    Continue
                </button>
            </section>
        </>
    )
}

export default FormFooter;