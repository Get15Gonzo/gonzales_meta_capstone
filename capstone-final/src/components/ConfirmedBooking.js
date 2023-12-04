import FormFooter from "./FormFooter";

const Modal = () => {

    return (
        <>
            <div className="modal--container">
                <div className="modal">
                    <h1>
                        We have received your reservation! We look forward to seeing you soon!
                    </h1>
                </div>
            </div>
            <FormFooter />
        </>
    )
}

export default Modal;