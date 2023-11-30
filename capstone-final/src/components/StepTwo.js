import {Formik, Field, Form} from 'formik';

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
                    <Field className="form--button" as="select" name="occasion" placeholder="Occasion">
                                        <option value="">Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                    </Field>
                    <Field name="time" as="select"/>
                        <option value="">Time</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="7:00pm">7:00pm</option>
                        <option value="8:00pm">8:00pm</option>
                        <option value="9:00pm">9:00pm</option>
                        <option value="10:00pm">10:00pm</option>

                    <button type="button" onClick={() => props.prev(values)}>Back</button>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default StepTwo;