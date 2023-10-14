import "../styles/SignUp.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsBalloonHeartFill } from "react-icons/bs";
import logo from "../assets/images/lanzsocialwhite.png";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate("/");
      console.log("User created");
    } catch (error) {
      toast.error("Email already in use!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="signup-container">
      <Link to="/">
        <img src={logo} />
      </Link>
      <h2>
        We're happy to have you here!
        <BsBalloonHeartFill color="#e0ff8f" size="28" />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-input padding-bottom">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">CREATE NEW ACCOUNT</button>
      </form>
    </div>
  );
}

export default SignUp;
