import FormFooter from "./FormFooter";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import CustomSelect from "./CustomSelect";
import dayjs from "dayjs"

const reserveSchema = Yup.object().shape({
    reserveDate: Yup
        .date()
        .required("Required"),
    NoOfDiners: Yup
        .string()
        .oneOf([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        .required("Required"),
    occasion: Yup
        .string()
        .oneOf(['Birthday', 'Engagement', 'Anniversary'])
        .required("Required"),
    time: Yup
        .string()
        .oneOf([ '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm'])
        .required("Required"),
})

const FormPage = () => {

/* const datePicker = dayjs().format("YYYY-MM-DD") */
/* const reserveSchema = Yup.object().shape({
    reserveDate: Yup
        .date(datePicker)
        .required("Required"),
    NoOfDiners: Yup
        .string()
        .oneOf([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        .required("Required"),
    occasion: Yup
        .string()
        .oneOf(['Birthday', 'Engagement', 'Anniversary'])
        .required("Required"),
    time: Yup
        .string()
        .oneOf([ '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm'])
        .required("Required"),
    firstName: Yup
        .string()
        .required("Required"),
    lastName: Yup
        .string()
        .required("Required"),
    email: Yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    phone: Yup
        .string()
        .required("Required"),
    specialRequests: Yup
        .string()
    
}); */

    return (
        <>
            <Formik className="Formik" initialValues={{ reserveDate: "", NoOfDiners:"", occasion:""}}>
                {(props) => (
                    <Form>
                        <div className="form--container">
                            <h1 className="form--title">Reservations</h1>
                            <div className="form--section-main">
                                    <Field className="form--button" type="date" name="reserveDate" />
                                    <Field className="form--button" as="select" name="NoOfDiners" placeholder="No. Of Diners">
                                        <option value="">No. Of Diners</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </Field>
                                    <Field className="form--button" as="select" name="occasion" placeholder="Occasion">
                                        <option value="">Occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </Field>
                                    <Field className="form--button" as="select" name="time" placeholder="Time">
                                        <option value="">Time</option>
                                        <option value="5:00pm">5:00pm</option>
                                        <option value="6:00pm">6:00pm</option>
                                        <option value="7:00pm">7:00pm</option>
                                        <option value="8:00pm">8:00pm</option>
                                        <option value="9:00pm">9:00pm</option>
                                        <option value="10:00pm">10:00pm</option>
                                    </Field>
                            </div>
                        </div>
                        <section>
                            {/* <Field className="form--button" as="select" name="occasion" placeholder="Occasion" /> */}
                        </section>
                    </Form>
                )}
            </Formik>
            <FormFooter />
        </> 
    )
}

export default FormPage;