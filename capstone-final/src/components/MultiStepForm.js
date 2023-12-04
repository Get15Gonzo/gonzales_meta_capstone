import { useState} from "react";
import BookingOne from "./BookingOne";
import BookingTwo from "./BookingTwo";
import { useNavigate } from "react-router-dom";

function MultiStepForm() {
    const [data, setData] = useState({
        seating:"",
        reserveDate:"",
        NoOfDiners:"",
        occasion:"",
        time:"",
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        specialMessage:"",
        privacyAgreement:"",

    })

    const navigate = useNavigate()

    const submitAPI = function(formData){
        return true;
    }

    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = (formData) => {
        if(submitAPI(formData)){
            navigate('/complete')
        }
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
    <BookingOne next={handleNextStep} data={data} />,
    <BookingTwo next={handleNextStep} prev={handlePrevStep} data={data} /> 
    ]


    return (
        <div>
            {steps[currentStep]}
        </div>
    )
}

export default MultiStepForm;
