import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const { cartItems } = useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
        <Link to='/' className="custom-link">
          <div className="title">
            <img src="/logo.png" alt="Arzooo" />
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <FontAwesomeIcon icon={faSearch} className="find" />
          </button>
        </div>
        <div className="user">
          <div className="user-detail">
            <div className="dropdown">
              <div className="dropdownbtn">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: 25 }} />
              </div>
              <div className="dropdown-content">
                <a href="#" >My Profile</a>
                <a href="#">Orders</a>
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <Link to='/cart'>
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 25 }} />
            <span class="num">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>
              {/* <img src="/assets/NewMobile/1.png" className="navimg" alt="" /> */}
              <div className="dropdown">
                <div className="dropdownbtn">
                  Mobiles
                </div>
                <div className="dropdown-content">
                  <a href="#" >iPhone</a>
                  <a href="#" >Samsung</a>
                  <a href="#" >Google</a>
                  <a href="#" >OnePlus</a>
                  <a href="#" >Xiaomi</a>
                  <a href="#" >Sony</a>
                  <a href="#" >LG</a>
                  <a href="#" >Motorola</a>
                  <a href="#" >Huawei</a>
                  <a href="#" >Oppo</a>
                  <a href="#" >Nokia</a>
                  <a href="#" >Realme</a>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>
              <div className="dropdown">
                <div className="dropdownbtn">
                  Computers
                </div>
                <div className="dropdown-content">
                <a href="#" >Dell</a>
                  <a href="#" >HP</a>
                  <a href="#" >Apple</a>
                  <a href="#" >Lenovo</a>
                  <a href="#" >Acer</a>
                  <a href="#" >Microsoft</a>
                  <a href="#" >Asus</a>
                  <a href="#" >Alienware</a>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>
              <div className="dropdown">
                <div className="dropdownbtn">
                  Fridge
                </div>
                <div className="dropdown-content">
                <a href="#" >LG</a>
                  <a href="#" >Samsung</a>
                  <a href="#" >Whirlpool</a>
                  <a href="#" >Fridgidaire</a>
                  <a href="#" >KitchenAid</a>
                  <a href="#" >GE</a>
                  <a href="#" >Maytag</a>
                  <a href="#" >Bosch</a>
                  <a href="#" >Haire</a>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/tv" className="custom-link">
            <li>
              <div className="dropdown">
                <div className="dropdownbtn">
                  Tv's
                </div>
                <div className="dropdown-content">
                  <a href="#" />
                  <a href="#" />
                </div>
              </div>
            </li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>
              <div className="dropdown">
                <div className="dropdownbtn">
                  Ac's
                </div>
                <div className="dropdown-content">
                <a href="#" >LG</a>
                  <a href="#" >Daikin</a>
                  <a href="#" >Carrier</a>
                  <a href="#" >HoneyWill</a>
                  <a href="#" >Whirlpool</a>
                  <a href="#" >Nest</a>
                  <a href="#" >Mitsubishi</a>
                  <a href="#" >Fridgidaire</a>
                  <a href="#" >Lennox</a>
                  <a href="#" >Parasonic</a>
                  <a href="#" >Haire</a>
                  <a href="#" >Trane</a>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
