import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Navbar, Sidebar } from "../../components";
import "./New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Input = ({ label, type, placeholder, htmlFor, id }) => {
  return (
    <div className="formInput">
      <label htmlFor={htmlFor}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

const New = ({ inputs, title }) => {
  const [imgFile, setImgFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="new__container">
        <Navbar />
        <Fade>
          <div className="new__Wrapper">
            <div className="top">
              <h1 className="title">{title}</h1>
            </div>
            <div className="bot">
              <div className="left">
                <img
                  src={
                    imgFile
                      ? URL.createObjectURL(imgFile)
                      : `https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640`
                  }
                  alt="img"
                />
              </div>
              <div className="right">
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                    <label htmlFor="file">
                      <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setImgFile(e.target.files[0])}
                    />
                  </div>
                  {inputs.map((item) => (
                    <div className="formInput" key={item.id}>
                      <label>{item.label}</label>
                      <input type={item.type} placeholder={item.placeholder} />
                    </div>
                  ))}
                  <button>confirm</button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default New;
