import FormFooter from './FormFooter'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const stepOneSchema = Yup.object().shape({
    seating: Yup
        .string()
        .oneOf(['Outdoor Seating', 'Indoor Seating']),
    reserveDate: Yup
        .date()
        .required("* Please Select a Date"),
    NoOfDiners: Yup
        .string()
        .oneOf([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        .required("* Please Select The Amount of Diners"),
    occasion: Yup
        .string()
        .oneOf(['Birthday', 'Engagement', 'Anniversary'])
        .required("* Please Select an Occasion"),
    time: Yup
        .string()
        .oneOf([ '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm'])
        .required("* Please Select a Time"),
})

const BookingOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }
    
        return (
            <>
                <Formik
                    initialValues={props.data}
                    validationSchema={stepOneSchema}
                    onSubmit={handleSubmit}
                >
                    {(errors, touched) => (
                        <Form>
                            <div className="form--container">
                                <h1 className="form--title">Reservations</h1>
                                <div className="form--radio">
                                        <Field className="form--radio-btn" type="radio" name="seating" value="Outdoor Seating" data-testid="radio" />
                                            <option className="form--outdoor-radio" value="Outdoor Seating">Outdoor Seating</option>
                                        <Field className="form--radio-btn" type="radio" name="seating" value="Indoor Seating" data-testid="radio" />
                                            <option value="Indoor Seating">Indoor Seating</option>
                                </div>
                                <div className="form--section-main">
                                        <Field 
                                            className= {errors.reserveDate && touched.reserveDate ? "input--error": "form--button"}
                                            type="date" 
                                            name="reserveDate" 
                                            placeholder="reservedate" 
                                            aria-errormessage="error-date" 
                                            aria-invalid="true" 
                                        />
                                            <ErrorMessage component="div" className="error--date" name="reserveDate" label="error-date" />
                                        <Field 
                                            label="NoOfDiners" 
                                            className= {errors.NoOfDiners && touched.NoOfDiners ? "input--error": "form--button"}
                                            as="select" name="NoOfDiners" 
                                            placeholder="NumberOfDiners" 
                                            data-testid="NoOfDiners" 
                                            aria-errormessage="error-diners" 
                                            aria-invalid="true"
                                        >
                                            <option value="">Diners</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </Field>
                                            <ErrorMessage component="div" className="error--diners" name="NoOfDiners" label="error-diners" />
                                        <Field 
                                            className="form--button" 
                                            as="select" name="occasion" 
                                            placeholder="Occasion" 
                                            data-testid="occasion" 
                                            aria-errormessage="error-occasion" 
                                            aria-invalid="true"
                                        >
                                            <option value="">Occasion</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Engagement">Engagement</option>
                                            <option value="Anniversary">Anniversary</option>
                                        </Field>
                                            <ErrorMessage component="div" className="error--occasion" name="occasion" aria-live="assertive" label="error-occasion" />
                                        <Field 
                                            className="form--button" 
                                            as="select"
                                            name="time" 
                                            placeholder="Time" 
                                            aria-errormessage="error-time"
                                            aria-invalid="true"
                                        >
                                            <option value="">Time</option>
                                            <option value="5:00pm">5:00pm</option>
                                            <option value="6:00pm">6:00pm</option>
                                            <option value="7:00pm">7:00pm</option>
                                            <option value="8:00pm">8:00pm</option>
                                            <option value="9:00pm">9:00pm</option>
                                            <option value="10:00pm">10:00pm</option>
                                        </Field>
                                            <ErrorMessage component="div" className="error--time" name="time" label="error-time" />
                                </div>
                            </div>
                            <div className="continue--btn-container">
                                <button type="submit" className='large--btn' data-testid='continue'>Continue</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <FormFooter />
            </>
        )
    }

    export default BookingOne;