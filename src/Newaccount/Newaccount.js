import "./Newaccount.css"
//images
import  logo  from "../images/Svg red 4.svg";
import Rectangle2 from "../images/Rectangle 2 (1).png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";

import { useNavigate } from "react-router-dom";

function Newaccount() {
  const navigate = useNavigate();
  //handleclick of Login
  function handleClick() {
    navigate("/Login");
  }

    //handleclick of otppage
    function handleClickOtp() {
      navigate("/Otppage");
    }
  
  return (
    <>
      <div className="Welcome-Newacc">
        <div className="Welcome-image">
          <img src={Rectangle2} alt="image" />
          <div className="logo">
            <img src={logo} alt="logo"  width="49px" />
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
        <div className="create-account">
          <h1>اهلا بك!</h1>
          <p>انشاء حساب جديد واستمتع بطرق تعلم ممتعة وشيقة</p>
          <form>
            <label>الاسم الاول</label>
            <div className="form-input">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
            <input type="text" placeholder='الاسم الاول' />
            </div>
            <label>الاسم الثاني</label>
            <div className="form-input">
            <span className="icon"><i className="fa-regular fa-user"></i></span>
            <input type="text" placeholder="الاسم الثاني" />
            </div>
            <label>رقم الهاتف</label>
            <div className="form-input">
            <span className="icon"><i className="fa-solid fa-phone-volume"></i></span>
            <input type="text" placeholder="رقم الهاتف" />
            </div>
            <label>البريد الإلكتروني </label>
            <div className="form-input">
            <span className="icon"><i className="fa-regular fa-envelope"></i></span>
            <input type="email" placeholder=" البريد الإلكتروني" />
            </div>
            <label>كلمة السر </label>
            <div className="form-input">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <input type="password" placeholder="كلمة السر" />
            </div>
            <label> تاكيد كلمة السر</label>
            <div className="form-input">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <input type="password" placeholder="تاكيد كلمة السر" />
            </div>
            <input type="submit" value="انشاء الحساب" className="submit" onClick={handleClickOtp}/>
          </form>
          <p className="que">
            لديك حساب بالفعل ؟ <a onClick={handleClick}>قم بتسجيل الدخول</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Newaccount;
