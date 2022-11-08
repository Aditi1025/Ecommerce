import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // alert(user.userName);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className="header__logo">
          <span><a href="#"><img src="https://fontmeme.com/permalink/221108/0c108a3b84ecd41cf18fe893c8f062fc.png" alt="kaushan-script-font" border="0"/></a></span>
        </div>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" name="searchinput"/>
        <ManageSearchIcon className="header__searchIcon" />  
      </div>

      <div className="header__nav">
        
          <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email.substr(0,5)}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
          </Link>

          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>  
          </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">FashGram</span>
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
  );
}

export default Header;