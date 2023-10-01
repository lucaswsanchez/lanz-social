import "../styles/LoginModal.css";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Log In Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="modal-container">
        <span>You are back!</span>
        <form>
          <div className="modal-form-inputs">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="modal-form-inputs">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="modal-center-btn">
            <button type="button" onClick={onClose}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
