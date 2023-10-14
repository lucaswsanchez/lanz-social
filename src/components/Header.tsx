import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import logo from "../assets/images/lanzsocialwhite.png";

function Header() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="header-user">
        {user ? (
          <span className="username">{user.email}</span>
        ) : (
          <div className="header-user-btn">
            <Link to="/login" className="white-link">
              <div className="login-btn">
                <span>LOG IN</span>
              </div>
            </Link>
            <Link to="/signup" className="white-link">
              <div className="signup-btn">
                <span>SIGN UP</span>
              </div>
            </Link>
          </div>
        )}
        {user && (
          <div className="header-user-out">
            <button onClick={handleLogout}>LOG OUT</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
