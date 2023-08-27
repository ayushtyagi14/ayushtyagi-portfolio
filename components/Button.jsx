import React from "react";
import Link from "next/link";

const Button = ({ title, image, url, outerWidth }) => {
  const handleClick = () => {
    window.location.href = url;
  };
  return (
    <>
      <button className="btn" style={{width: outerWidth}} onClick={handleClick}>
        {image ? (
          <span className="btn-logo">
            <img src={title} alt="logo" width={20} height={20} />
          </span>
        ) : (
          <span className="btn-title">
            <h1>{title}</h1>
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
