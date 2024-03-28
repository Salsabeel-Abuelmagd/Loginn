import "./styles.css";
import Welcome from "./Welcomepage/Welcomepage.js";
import Login from "./Login/Login.js";
import Newaccount from "./Newaccount/Newaccount.js";
import Otppage from "./Otppage/Otppage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Newaccount" element={<Newaccount />} />
          <Route path="/Otppage" element={<Otppage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
