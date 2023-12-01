import useState from 'react';

const Modal = () => {

    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(false)
    }

    return (
        <>
            {modal && <div className="modal--container">
                <div>
                    <h1>
                        heading
                    </h1>
                </div>
            </div>
            }
        </>
    )
}

export default Modal;