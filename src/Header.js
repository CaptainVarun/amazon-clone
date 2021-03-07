import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import RoomIcon from "@material-ui/icons/Room";
import ReactCountryFlag from "react-country-flag";
import MenuIcon from "@material-ui/icons/Menu"; 

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <MenuIcon className="header__menuIcon" />

        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" className />
        </div>

        <div className="header__nav">
          <div className="header__flag header__option">
            <ReactCountryFlag countryCode="US" svg />
          </div>

          <Link to={!user && `/login`}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello,&nbsp;
                {user
                  ? user?.email.substring(0, user?.email.indexOf("@"))
                  : `Guest`}
              </span>

              <span className="header__optionLineTwo">
                {user ? `Sign Out` : `Sign In`}
              </span>
            </div>
          </Link>

          <Link to={user && `/orders`}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>

              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>

            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__bottomHeader">
        <div className="header__location ">
          <RoomIcon />
          <div className="header__locoption">
            <span className="header__optionHello">Deliver to</span>
            <span className="header__optionAddress ">India</span>
          </div>
        </div>

        <span className="header__deals">Today's Deals</span>

        <span className="header__cs">Customer Service</span>

        <span className="header__gcard">Gift Cards</span>

        <span className="header__registry">Registry</span>

        <span className="header__sell">Sell</span>
      </div>
    </>
  );
}

export default Header;
