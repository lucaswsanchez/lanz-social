import "../styles/SignUp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";

interface SignUpState {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpState>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform registration logic, like sending the data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <h2>
        We're happy to have you here!
        <BsBalloonHeartFill color="#fb5151" size="28" />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-form-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signup-form-input padding-bottom">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/">
          <button type="submit">Create new account</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
