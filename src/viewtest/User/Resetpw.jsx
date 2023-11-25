import React from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import {
  FaUser,
  FaCar,
  FaHeart,
  FaMapLocationDot,
  FaGift,
  FaLocationDot,
  FaKey,
  FaArrowRightFromBracket,
  FaTrashCan,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbarmobile from "./Navbarmobile";

function Resetpw() {
  return (
    <div className="main-color">
      <Header />
      <div className="userinfor">
        <div className="userinfor__nav" id="userinfor__nav">
          <h1 className="userinfor__nav-name">Xin chào bạn!</h1>
          <ul className="userinfor__nav-list">
            <Link to="/user" className="userinfor-nav-link">
              <li className="userinfor__nav-list-child">
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
                <p className="userinfor__nav-list-child-text">
                  Địa chỉ của tôi
                </p>
              </li>
            </Link>

            <Link to="/Resetpw" className="userinfor-nav-link user-active">
              <li className="userinfor__nav-list-child link-active">
                <i className="userinfor__nav-list-child-icon">
                  <FaKey></FaKey>
                </i>
                <p className="userinfor__nav-list-child-text">Đổi mật khẩu</p>
              </li>
            </Link>

            <Link to="/MainUser" className="userinfor-nav-link">
              <li className="userinfor__nav-list-child">
                <i className="userinfor__nav-list-child-icon">
                  <FaArrowRightFromBracket></FaArrowRightFromBracket>
                </i>
                <p className="userinfor__nav-list-child-text">Đăng xuất</p>
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
          <div className="box-title">
            <h1>Đổi mật khẩu</h1>
            <p>Vui lòng nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu</p>
          </div>
          <div className="content-box myaddress-form">
            <div className="myfavs-cars-title">
              <h3>Nhập mật khẩu</h3>
            </div>
            <div className="myfavs-cars-content">
              <div className="form-content">
                <div className="content-title-input">
                  <p>Mật khẩu hiện tại</p>
                </div>
                <div className="content-form-input">
                  <input type="text"></input>
                </div>
              </div>
              <div className="form-content">
                <div className="content-title-input">
                  <p>Mật khẩu mới</p>
                </div>
                <div className="content-form-input">
                  <input type="text"></input>
                </div>
              </div>
              <div className="form-content">
                <div className="content-title-input">
                  <p>Xác nhận mật khẩu mới</p>
                </div>
                <div className="content-form-input">
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div className="resetpw-btn">
              <div className="resetpw-btn-submit">
                <Link className="userinfor-nav-link">Xác nhận</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpw;
