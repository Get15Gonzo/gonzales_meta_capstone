import FormFooter from "./FormFooter";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomSelect from "./CustomSelect";

const FormPage = () => {

/* const datePicker = dayjs().format("YYYY-MM-DD") */

const reserveSchema = Yup.object().shape({
   /*  reserveDate: Yup
        .date(datePicker)
        .required("Required"), */
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
    
});

    return (
        <Formik
            initialValues={{
                reserveDate: "",
                NoOfDiners: "",
                occasion:"",
                time:"",
                firstName:"",
                lastName:"",
                email:"",
                phone:"",
                specialRequests:""
            }}
            validationSchema={reserveSchema}
        >
            {(props) => (
                <Form>
                    <CustomSelect
                        label="No. Of Diners"
                        name="NoOfDiners"
                        placeholder="Please Choose"
                    >
                        <option value="">Please Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </CustomSelect>
                </Form>
            )}
        </Formik>
    )
}

export default FormPage;