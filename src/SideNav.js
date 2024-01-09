import "./sidenav.css";
import logo from "./assets/logo.png";
import dropdown from "./assets/svgs/arrowDown.svg";
import wallet from "./assets/svgs/wallet.svg";
import { items } from "./constants/menuitem";
import MenuItem from "./components/MenuItem";
import { useState } from "react";

export default function SideNav() {
  const [opton, setOption] = useState("Payments");

  return (
    <>
      <div className="sidenav-container">
        <div className="profile-container">
          <div className="profile-details">
            <img src={logo} className="profile-logo" />
            <div className="name-container">
              <p className="name">Nishyan</p>
              <p className="visit">Visit store</p>
            </div>
          </div>
          <div role="button">
            <img src={dropdown} />
          </div>
        </div>
        <div className="container">
          <div className="menu-container">
            {items.map((item, index) => (
              <MenuItem
                key={item.title}
                icon={item?.icon}
                title={item?.title}
                active={item.title === opton}
                setOption={setOption}
              />
            ))}
          </div>
          <div className="active-credits-container">
            <div className="wallet-container">
              <img src={wallet} />
            </div>
            <div>
              <p className="available-credits">Available credits</p>
              <p className="credits">222.10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
