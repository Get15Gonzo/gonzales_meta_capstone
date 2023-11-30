import {useState} from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MultiStepForm() {
    const [data, setData] = useState({
        seating:"",
        reserveDate:"",
        NoOfDiners:"",
        occasion:"",
        time:"",
    })
    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        console.log("Form Submitted", formData)
    }

    const handleNextStep = (newData, final = false) => {
        setData(prev => ({...prev, ...newData}))

        if (final) {
            makeRequest(newData)
            return
        }
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
    }

    
    const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} /> 
    ]


    return (
        <div>
            {steps[currentStep]}
        </div>
    )
}

export default MultiStepForm;

/* const StepOne = (props) => {
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
                    <Field name="seating" as="select"/>
                        <option value="indoor">indoor</option>
                        <option value="outdoor">outdoor</option>
                    <Field name="reserveDate" type="date"/>
                    <Field name="NoOfDiners" as="select"/>
                        <option value="">Diners</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    )
} */

/* const StepTwo = (props) => {
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
} */

