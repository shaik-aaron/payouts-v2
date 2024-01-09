import React from "react";
import home from "../assets/svgs/house.svg";

function MenuItem({ icon = home, title = "home", active = false, setOption }) {
  return (
    <div
      onClick={() => setOption(title)}
      className={`menu-option ${active && "menu-active"}`}
    >
      <img src={icon} />
      <p className="menu-name">{title}</p>
    </div>
  );
}

export default MenuItem;
