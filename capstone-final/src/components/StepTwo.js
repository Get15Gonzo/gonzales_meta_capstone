import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";

const stepTwoSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .required("Please put your First Name"),
    lastName: Yup
        .string()
        .required("Please put your Last Name"),
    phone: Yup
        .string()
        .phone("Please input a valid Phone Number")
        .required("Please input a phone"),
    email: Yup
        .string()
        .email("Please input a valid Email")
        .required("Please input an Email"),
    specialMessage: Yup
        .string(),
    privacyAgreement: Yup
        .string()
})

const StepTwo = (props) => {
    const handleSubmit = (values) => {
        props.next(values, true)
    }
    
    return (
        <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
        >
            {({values}) => (
                <Form>
                    <div className="form--container">
                            <h1 className="form--title">Reservations</h1>
                            <div className="form--section-main">
                                    <h5>First Name</h5>
                                    <Field className="form--button" type="input" name="firstName" />
                                        <ErrorMessage component="div" className="error--date" name ="firstName" />
                                    <h5>Last Name</h5>
                                    <Field className="form--button" type="input" name="lastName" placeholder="last name" />
                                        <ErrorMessage component="div" className="error--diners" name="lastName" />
                                    <h5>Email</h5>
                                    <Field className="form--button" type="email" name="email" placeholder="email" />
                                        <ErrorMessage component="div" className="error--occasion" name="occasion" />
                                    <h5>Phone Number</h5>
                                    <Field className="form--button" type="phone" name="phone" placeholder="Phone" />
                                        <ErrorMessage component="div" className="error--time" name ="time" />
                                    <h5>Special Request</h5>
                                    <Field className="form--button" type="input" name="specialMessage" placeholder="Special Request" />
                                        <ErrorMessage component="div" className="error--time" name ="specialMessage" />
                                        <h5>You agree to our Privacy Policy</h5>
                                    <Field className="form--button" type="checkbox" name="privacyAgreement" />
                                        <ErrorMessage component="div" className="error--time" name ="privacyAgreement" />
                            </div>
                        </div>
                    <button type="button" className="large--btn form--back-btn" onClick={() => props.prev(values)}>Back</button>
                    <button className="large--btn form--submit-btn" type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default StepTwo;