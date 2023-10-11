import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

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
    <>
      <div className="header-logo">Lanz Social</div>
      <div className="header-user">
        {user ? (
          <p>{user.email}</p>
        ) : (
          <div className="header-user-btn" >
            <Link to="/login" className="white-link">
            <div className="login-btn">
              <span>Log In</span>
            </div>
            </Link>
            <Link to="/signup" className="white-link">
              <div className="signup-btn">
                <span>Sign Up</span>
              </div>
            </Link>
          </div>
        )}
        {user && (
          <div className="header-user-out">
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
