import FormFooter from "./FormFooter";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const reserveSchema = Yup.object().shape({
    reserveDate: Yup
        .date()
        .required("Required"),
    NoOfDiners: Yup
        .oneOf([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        .required("Required"),
    occasion: Yup
        .oneOf(['Birthday', 'Engagement', 'Anniversary'])
        .required("Required"),
    time: Yup
        .oneOf([ '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm'])
        .required("Required"),
     
})

const FormPage = () => {
    return (
        <Formik
            initialValues={{
                reserveDate: "",
                NoOfDiners: "",
                occasion:"",
                time:"",
            }}
            validationSchema={reserveSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        as="select"
                        name="reserveDate"
                        className="form--select">
                    </Field>
                </Form>
            )}
        </Formik>
    )
}

export default FormPage;