import "./Otppage.css"
//images
import  logo  from "../images/Svg red 4.svg";
import Rectangle from "../images/Rectangle 2.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";


function Otppage() {
  return (
    <>
     <div className="Welcome">
        <div className="Welcome-image">
          <img src={Rectangle} alt="image" />
          <div className="logo">
            <img src={logo} alt="logo" width="49px"/>
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
        <div className="otp-text">
            <h2>التحقق من رقم الهاتف</h2>
            <p>
                 ادخل رمز التأكيد الذي  قمنا بإرساله إليك. تم ارساله الي <span>”01554295388“</span>  <a>تعديل</a>
            </p>
            <form>
              <div className="inputs">
              <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            </div>
           
            <input type="submit" value="تأكيد" />
            </form>

            <p className="que">
            لم يصلك الكود ؟ <a> إعادة إرساله </a>
          </p>

        </div>
        </div>
    </>
    )
};

export default Otppage;