import { Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default RoutesComponent;
