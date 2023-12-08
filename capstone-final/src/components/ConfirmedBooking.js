import FormFooter from "./FormFooter";

const ConfirmedBooking = () => {

    return (
        <>
            <section className="modal--container">
                <div className="modal">
                    <h1>
                        We have received your reservation! <br />We look forward to seeing you soon!
                    </h1>
                </div>
            </section>
            <FormFooter />
        </>
    )
}

export default ConfirmedBooking;