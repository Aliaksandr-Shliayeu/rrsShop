import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item`}>
      <div
        className={`menu-item_image ${size}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="menu-item_content">
        <h1 className="menu-item_title"> {title} </h1>
        <span className="menu-item_subtitle"> SHOP NOW </span>
      </div>
    </div>
  );
};

export default MenuItem;
