import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
        <div className="header__center">
          <input type="text" placeholder="Start your search" />
          <SearchIcon className="icon__bg" />
        </div>
        <div className="header__right">
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
