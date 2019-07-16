import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    // eslint-disable-next-line no-restricted-globals
    <div
      className={`menu-item`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
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

export default withRouter(MenuItem);
