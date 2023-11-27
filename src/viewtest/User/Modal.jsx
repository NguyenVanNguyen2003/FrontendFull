import React, { useState } from "react";
import "../User/css/modal.css";
import "../User/css/reponsive.css";
import {FaPen} from "react-icons/fa6";
function AnimatedModal() {
  const [modalDisplay, setModalDisplay] = useState("none");

  const openModal = () => {
    setModalDisplay("block");
  };

  const closeModal = () => {
    setModalDisplay("none");
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "myModal") {
      setModalDisplay("none");
    }
  };

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <div className="modal-main">
      <div className="btn-openModal" onClick={openModal}>Chỉnh sửa<i><FaPen></FaPen></i></div>
      <div
        id="myModal"
        className="modal-user"
        style={{ display: modalDisplay }}
        onClick={handleOutsideClick}>
        <div className="modal-content">
          <div className="modal-body">
              <h1>Chỉnh sửa thông tin</h1>
              <div className="input-textarenna">
              <div className="change-avt">
                    <h3>Thay đổi ảnh đại diện</h3>
                    <div>
                    <div>
                      <input type="file" onChange={handleChange}
                      className=""/>                    
                    </div>
                   {/*<div className="avt-upload"><img src={file} alt=""/></div>*/}
                    </div>
              </div>
              <h3>Nhập số điện thoại mới</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="0123456789"/>               
               </div>
              </div>
              <div className="input-textarenna">
              <h3>Nhập số email mới</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="abc@gmail.com"/>               
               </div>
              </div>
              <div className="input-textarenna">
              <h3>Thêm liên kết Facebook</h3>
               <div className="wrap-input">
                  <input type="text" placeholder="http://www.facebook.com"/>               
               </div>
              </div>
              <div className="btn-modal">
                <button onClick={closeModal}>Hủy</button>
                <button className="btn-modal-active">Xác nhận</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedModal;
