import "./Login.css"
//images
import  logo  from "../images/Svg red 4.svg";
import Rectangle from "../images/Rectangle 2.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
 import egypt from "../images/egypt_icon.png";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  //handle click of newaccount
  function newaccount() {
    navigate("/Newaccount");
  }


  return (
    <>
      <div className="Welcome">
        <div className="Welcome-image">
          <img src={Rectangle} alt="image" />
          <div className="logo">
            <img src={logo} alt="logo" width="49px" />
          </div>
          <div className="up-image">
            <p>
              وفر أكتر مع اشتراكتنا
              الشهريـــــــــــــــــــــــــــــــــــــــــــــة
            </p>
            <div className="download">
              <img src={image1} alt="image1" />
              <img src={image2} alt="image2" />
            </div>
          </div>
        </div>
        <div className="login-text">
          <h1>مرحبا بعودتك !</h1>
          <p>سجل الدخول الي حسابك واستمتع بطرق تعلم ممتعة وشيقة</p>
          <form>
            <label>رقم الهاتف</label>
            <div className="cont">
              <select name="select">
                <option value="Egypt">
                   +20 
                  </option>
              </select>
              <div className="form-input">
            <span className="icon"><i className="fa-solid fa-phone-volume"></i></span>
            <input type="text" placeholder="رقم الهاتف" />
            </div>
            </div>
          </form>
          <button className="btn">تسجيل الدخول</button>
          <p className="que">
            ليس لديك حساب ؟ <a onClick={newaccount}>إنشاء حساب جديد</a>{" "}
          </p>
          <p className="visitor">الدخول كزائر</p>
        </div>
      </div>
    </>
  );
}
export default Login;
