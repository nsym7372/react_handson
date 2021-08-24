import Modal from "react-modal";

Modal.setAppElement("#root");
export default function CreateForm({modalIsOpen, setIsOpen}) {

    const modalStyle = {
        overlay: {
          position: "fixed",
          top:0,
          left:0,
          zIndex:100,
          backgroundColor: "rgba(0,0,0,0.5)"
        },
        content: {
          position: "absolute",
          top: "5rem",
          left: "5rem",
          right: "5rem",
          bottom: "5rem",
          backgroundColor: "paleturquoise",
          borderRadius: "1rem",
          padding: "1.5rem"
        }
      };

    return (
        <div>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={() => setIsOpen(false)}>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>

            {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen}>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal> */}
        </div>
    );
}