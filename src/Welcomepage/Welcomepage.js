import "./Welcomepage.css";
//images
import  logo  from "../images/Svg red 4.svg";
import Rectangle from "../images/Rectangle 2.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";

import { useNavigate } from "react-router-dom";


function Welcome() {
  const navigate = useNavigate();
  //handleclick of Login
  function handleClick() {
    navigate("/Login");
  }

  //handleclick of Newaccount
  function newaccount() {
    navigate("/Newaccount");
  }


  
  return (
    <>
      <div>
        <div className="Welcome">
          <div className="Welcome-image">
            <img src={Rectangle} alt="image" />
            <div className="logo">
              <img src={logo} alt="logo"  width="49px"/>
            </div>
            <div className="up-image">
              <p>
                وفر أكتر مع اشتراكتنا
                الشهريـــــــــــــــــــــــــــــــــــــــــــــة
              </p>
              <div className="download">
                <img src={image1} alt="image1"/>
                <img src={image2} alt="image2" />
              </div>
            </div>
          </div>
          <div className="Welcome-text">
            <h2>مرحبا بك ف ميلى!</h2>
            <p>اشتراك وجبات متنوعــة توصلك يوميًا من أكثر من 200 مطعم</p>
            <a onClick={newaccount} href="" className="newaccount">
              انشاء حساب جديد
            </a>

            <a onClick={handleClick} href="" className="login">
              تسجيل الدخول
            </a>

            <p>تسجيل الدخول باستخدام</p>
            <a href="https://facebook.com" className="facebook">
              التسجيل باستخدام الفيس   
              <img src={facebook} alt="google" />
            </a>
            <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=ar&ifkv=ARZ0qKKy95gzJ_Hgv98yG_Gr_5SU8xMDLzaUqERHRgbgF-uPXQukulZDbR_WWFM0bgtTUhAKbnFi4g&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1342266526%3A1710854764283150&theme=mn&ddm=0" className="google">
                التسجيل باستخدام جوجل
              <img src={google} alt="google" />
            </a>
            <p className="visitor">الدخول كزائر</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
