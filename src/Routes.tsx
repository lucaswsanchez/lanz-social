import { Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default RoutesComponent;
