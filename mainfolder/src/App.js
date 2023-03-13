import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn"
import Register from "./Pages/Register"
import RegisterFormEmployer from "./Pages/RegisterFormEmployer"
import EmployerPaymentOptions from "./Pages/EmployerPaymentOptions";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="RegisterFormEmployer" element={<RegisterFormEmployer />} />
        <Route path="EmployerPaymentOptions" element={<EmployerPaymentOptions />} />
      </Routes>

    </>
  );
}
export default App;
