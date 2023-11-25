import React, {useState, useEffect} from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/reponsive.css";
import "./css/mainuser.css";
import {
  FaUser,
  FaMedal,
  FaPen,
  FaCar,
  FaLink,
  FaHeart,
  FaXmark,
  FaUpload,
  FaMapLocationDot,
  FaGift,
  FaLocationDot,
  FaKey,
  FaArrowRightFromBracket,
  FaTrashCan,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbarmobile from "./Navbarmobile";
import axios from "axios";
// import images from './img/erenyeager.jpg'; 

function UserInfor() {
  
  const [fullName, setFullName] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vip, setVip] = useState('');


  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href="http://localhost:3000/"
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      
      axios.get('http://localhost:5000/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      })
        .then((response) => {
          setImagePath(response.data.user.imagePath);
          setFullName(response.data.user.fullName);
          setPhoneNumber(response.data.user.phoneNumber);
          setEmail(response.data.user.email);
          setVip(response.data.user.vip);
        })
        .catch((error) => {
          console.error('Lỗi :', error);
          
        });
    }
  }, []);
  return (
    <div className="userinfor">
      <div className="userinfor__nav" id="userinfor__nav">
        <h1 className="userinfor__nav-name">Xin chào {fullName}!</h1>
        <ul className="userinfor__nav-list">
          <Link to="/user" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child link-active">
              <i className="userinfor__nav-list-child-icon">
                <FaUser></FaUser>
              </i>
              <p className="userinfor__nav-list-child-text">
                Tài khoản của tôi
              </p>
            </li>
          </Link>

          <Link to="/myfavs" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaHeart></FaHeart>
              </i>
              <p className="userinfor__nav-list-child-text">Xe yêu thích</p>
            </li>
          </Link>

          <Link to="/Mycars" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaCar></FaCar>
              </i>
              <p className="userinfor__nav-list-child-text">Xe của tôi</p>
            </li>
          </Link>

          <Link to="/Mytrips" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaMapLocationDot></FaMapLocationDot>
              </i>
              <p className="userinfor__nav-list-child-text">
                Chuyến đi của tôi
              </p>
            </li>
          </Link>

          <Link to="/Myreward" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaGift></FaGift>
              </i>
              <p className="userinfor__nav-list-child-text">
                Khuyến mãi / Quà tặng
              </p>
            </li>
          </Link>

          <Link to="/Myaddress" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaLocationDot></FaLocationDot>
              </i>
              <p className="userinfor__nav-list-child-text">Địa chỉ của tôi</p>
            </li>
          </Link>

          <Link to="/Resetpw" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaKey></FaKey>
              </i>
              <p className="userinfor__nav-list-child-text">Đổi mật khẩu</p>
            </li>
          </Link>

          <Link className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaArrowRightFromBracket></FaArrowRightFromBracket>
              </i>
              <p className="userinfor__nav-list-child-text" onClick={handleLogout}>Đăng xuất</p>
            </li>
          </Link>

          <Link to="/Deleteaccount" className="userinfor-nav-link">
            <li className="userinfor__nav-list-child">
              <i className="userinfor__nav-list-child-icon">
                <FaTrashCan></FaTrashCan>
              </i>
              <p className="userinfor__nav-list-child-text">
                Yêu cầu xóa tài khoản
              </p>
            </li>
          </Link>
        </ul>
      </div>

      {/* Drop menu mobile */}
      <Navbarmobile />
  
      <div className="userbox">
        <div className="userinfor__profile">
          <div className="userinfor__profile-account-title">
            <h3 className="userinfor__profile-account-projectname">
              Thông tin tài khoản
              <i className="userinfor__profile-detail-trip-icon">
                <FaPen></FaPen>
              </i>
            </h3>
            <div className="userinfor__profile-detail-trip">
              <div className="userinfor__profile-detail-trip-button">
                <i className="userinfor__profile-detail-trip-button-icon">
                  <FaCar></FaCar>
                </i>
                <p className="userinfor__profile-detail-trip-button-text">
                  0 <span>chuyến</span>
                </p>
              </div>
            </div>
          </div>

          <div className="userinfor__profile-main">
            <div className="userinfor__profile-account">
              <div className="userinfor__profile-account">
                <img
                  className="userinfor__profile-account-img"
                  src={imagePath}
                  alt=""
                ></img>
                <h3 className="userinfor__profile-account-name">
                 {fullName}
                </h3>
                <p className="userinfor__profile-account-text">
                  Tham gia: 19/09/2023
                </p>

                <div className="userinfor__profile-account-bonus-main">
                    <div className="userinfor__profile-detail-trip">
                        <div className="userinfor__profile-detail-trip-button">
                      <i className="userinfor__profile-detail-trip-button-icon">
                        <FaCar></FaCar>
                      </i>
                      <p className="userinfor__profile-detail-trip-button-text">
                        0 <span>chuyến</span>
                      </p>
                        </div>
                    </div>
                    <div className="userinfor__profile-account-bonus-content">
                      <div className="userinfor__profile-account-bonus">
                          <i className="userinfor__profile-account-bonus-icon">
                              <FaMedal></FaMedal>
                          </i>
                          <h5 className="userinfor__profile-account-bonus-name">
                              {vip}
                          </h5>
                      </div>                    
                    </div>  

           
                </div>


              </div>
            </div>
            <div className="userinfor__profile-detail">
              <div className="userinfor__profile-detail-form">
                <div className="userinfor__profile-detail-form-date">
                  <h3 className="userinfor__profile-detail-form-date-name">
                    Ngày sinh
                  </h3>
                  <p className="userinfor__profile-detail-form-date-text">
                    --/--/----
                  </p>
                </div>
                <div className="userinfor__profile-detail-form-sex">
                  <h3 className="userinfor__profile-detail-form-sex-name">
                    Giới tính
                  </h3>
                  <p className="userinfor__profile-detail-form-sex-text">Nam</p>
                </div>
              </div>
              <div className="userinfor__profile-detail-list">
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Số điện thoại{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    {phoneNumber}
                    <i>
                      <FaPen></FaPen>
                    </i>
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Email{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    {email}
                    <i>
                      <FaPen></FaPen>
                    </i>
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Facebook
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    Thêm liên kết
                    <i>
                      <FaLink></FaLink>
                    </i>
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Google{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    Nguyen Van Nguyen(FPLDN_17)
                    <i>
                      <FaLink></FaLink>
                    </i>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userinfor__papers">
          <div className="userinfor__papers-header">
            <div className="userinfor__papers-header-first">
              <h3 className="userinfor__papers-header-first-name">
                Giấy phép lái xe
              </h3>
              <div className="userinfor__papers-header-first-button btn__small">
                <i>
                  <FaXmark></FaXmark>
                </i>
                <p>Chưa xác thực</p>
              </div>
            </div>
            <div className="userinfor__papers-header-last">
              <p className="userinfor__papers-header-last-text">Chỉnh sửa</p>
              <i className="userinfor__papers-header-last-icon">
                <FaPen></FaPen>
              </i>
            </div>
          </div>
          <div className="userinfor__papers-content">
            <div className="userinfor__papers-content-left">
              <h4 className="userinfor__papers-content-left-name">
                Thông tin chung
              </h4>
              <p className="userinfor__papers-content-left-text">Số GPLX</p>
              <input
                className="userinfor__papers-content-left-input"
                type="text"
                placeholder="Nhập số GPLX đã cấp"
              ></input>
              <p className="userinfor__papers-content-left-text">Họ và tên</p>
              <input
                className="userinfor__papers-content-left-input"
                type="text"
                placeholder="Nhập đầy đủ họ tên"
              ></input>
              <p className="userinfor__papers-content-left-text">Ngày sinh</p>
              <input
                className="userinfor__papers-content-left-input"
                type="text"
                placeholder="11-10-2003"
              ></input>
            </div>
            <div className="userinfor__papers-content-right">
              <h4 className="userinfor__papers-content-right-name">
                {" "}
                Hình ảnh
              </h4>
                <div className="userinfor__papers-content-right-img" src="">
                <div className="userinfor__papers-content-right-img-main">
                    <i className="userinfor__papers-content-right-img-icon">
                      <FaUpload></FaUpload>
                    </i>
                    <p className="userinfor__papers-content-right-img-text">
                      Chọn hình ảnh giấy phép
                    </p>                  
                </div>
           
              </div>

            </div>
          </div>
        </div>
        <div className="userinfor__bootom"></div>
      </div>
    </div>
  );
}

export default UserInfor;
