import FormFooter from './FormFooter';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const phoneRegExp = '{^[\+]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$}'

const stepTwoSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .required("*First Name is required"),
    lastName: Yup
        .string()
        .required("*Last Name is required"),
    phone: Yup
        .string()
        .phone( phoneRegExp,'Phone Number is invalid'),
    email: Yup
        .string()
        .email("*Email format required")
        .required("*Email is required"),
    specialMessage: Yup
        .string(),
    privacyAgreement: Yup
        .string()
        .required("*Please agree to our Privacy Policy")
})

const BookingTwo = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true)
    }
    
    return (
        <>
            <Formik
                initialValues={props.data}
                validationSchema={stepTwoSchema}
                onSubmit={handleSubmit}
            >
                {({values}) => (
                    <Form>
                        <div className="form--container">
                                <h1 className="form--title" data-testid='form-two' id="form-two">Reservations</h1>
                                <div className="form--section-main">
                                        <h5 className="form--sub-heading form--first">*First Name</h5>
                                        <Field className="form--button" type="text" name="firstName" />
                                            <ErrorMessage component="div" className="error--first" name ="firstName" />
                                        <h5 className="form--sub-heading form--last">*Last Name</h5>
                                        <Field className="form--button" type="text" name="lastName" />
                                            <ErrorMessage component="div" className="error--last" name="lastName" />
                                        <h5 className="form--sub-heading form--email">*Email</h5>
                                        <Field className="form--button form--email-size" type="email" name="email" />
                                            <ErrorMessage component="div" className="error--email" name="email" />
                                        <h5 className="form--sub-heading form--phone">Phone Number</h5>
                                        <Field className="form--button" type="text" name="phone" />
                                            <ErrorMessage component="div" className="error--phone" name ="phone" />
                                        <h5 className="form--sub-heading form--request">Special Request</h5>
                                        <Field className="form--button form--message" as="textarea" name="specialMessage" />
                                        <Field className="form--checkbox" type="checkbox" data-testid="privacy" name="privacyAgreement" />
                                            <ErrorMessage component="div" className="error--privacy" name ="privacyAgreement" />
                                        <h5 className='form--policy'>*Please agree to our Privacy Policy</h5>
                                </div>
                            </div>
                        <button type="button" className="large--btn form--back-btn" onClick={() => props.prev(values)}>Back</button>
                        <button className="large--btn form--submit-btn" data-testid="submit" type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <FormFooter />
        </>
    )
}

export default BookingTwo;