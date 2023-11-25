import React from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/reponsive.css"
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


function Mytrips() {
  return (
    <div  className="main-color">
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
              <li className="userinfor__nav-list-child link-active">
                <i className="userinfor__nav-list-child-icon ">
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

            <Link to="/Resetpw" className="userinfor-nav-link">
              <li className="userinfor__nav-list-child">
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
          <div className="content-box">
            <div className="myfavs-cars-title">
              <h3>Chuyến đi của tôi</h3>
            </div>

            <div className="mytrips-mode">
              <div className="mytrips-mode-tab">
                <Link className="userinfor-nav-link mytrips-link active">
                  Chuyến hiện tại
                </Link>
                <Link className="userinfor-nav-link mytrips-link">
                  Lịch sử chuyến
                </Link>
              </div>
            </div>
            <div className="myfavs-cars">
              <img
                src="https://www.mioto.vn/static/media/empty-trip.8f191e42.svg"
                alt=""
              ></img>
              <p>Không có xe yêu thích nào</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mytrips;
