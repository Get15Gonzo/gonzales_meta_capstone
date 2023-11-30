import {Formik, Field, Form, ErrorMessage} from 'formik';

const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }
    
        return (
            <Formik
                initialValues={props.data}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="form--container">
                            <h1 className="form--title">Reservations</h1>
                            <div className="form--radio">
                                    <Field className="form--radio-btn" type="radio" name="seating" value="Outdoor Seating" />
                                        <option className="form--outdoor-radio" value="Outdoor Seating">Outdoor Seating</option>
                                    <Field className="form--radio-btn" type="radio" name="seating" value="Indoor Seating" />
                                        <option value="Indoor Seating">Indoor Seating</option>
                            </div>
                            <div className="form--section-main">
                                    <Field className="form--button" type="date" name="reserveDate" />
                                        <ErrorMessage component="div" className="error--date" name ="reserveDate" />
                                    <Field className="form--button" as="select" name="NoOfDiners" placeholder="Diners">
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
                                        <ErrorMessage component="div" className="error--diners" name="NoOfDiners" />
                                    <Field className="form--button" as="select" name="occasion" placeholder="Occasion">
                                        <option value="">Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </Field>
                                        <ErrorMessage component="div" className="error--occasion" name="occasion" />
                                    <Field className="form--button" as="select" name="time" placeholder="Time">
                                        <option value="">Time</option>
                                        <option value="5:00pm">5:00pm</option>
                                        <option value="6:00pm">6:00pm</option>
                                        <option value="7:00pm">7:00pm</option>
                                        <option value="8:00pm">8:00pm</option>
                                        <option value="9:00pm">9:00pm</option>
                                        <option value="10:00pm">10:00pm</option>
                                    </Field>
                                        <ErrorMessage component="div" className="error--time" name ="time" />
                            </div>
                        </div>
                        <button type="submit" className='large--btn form--continue-btn'>Continue</button>
                    </Form>
                )}
            </Formik>
        )
    }

    export default StepOne;