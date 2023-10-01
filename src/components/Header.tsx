import "../styles/Header.css";
import { useState } from "react";
import LoginModal from "./LoginModal";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="header-logo">Lanz Social</div>
      <div className="header-nav">
        <ul>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
        </ul>
      </div>
      <div className="header-user">
        <div className="login-btn" onClick={openModal}>
          <span>Log In</span>
        </div>
        <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="signup-btn">
          <span>Sign Up</span>
        </div>
      </div>
    </>
  );
}

export default Header;
