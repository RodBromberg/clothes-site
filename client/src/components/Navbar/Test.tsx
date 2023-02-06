import React from "react";
import "./Test.css";

interface Props {}

const Test: React.FC<Props> = () => {
  return (
    <nav className="navbar">
      <Logo />
      <AddressSelector />
      <SearchBar />
      <LanguageSelector />
      <SignIn />
      <ReturnsOrders />
      <Cart />
    </nav>
  );
};

const Logo = (props: Props) => {
  return <div className="logo">Logo</div>;
};

const AddressSelector = (props: Props) => {
  return <div className="address-selector">Hello, select your address</div>;
};

const SearchBar = (props: Props) => {
  return (
    <div className="search-bar">
      <select className="search-bar-select">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <input type="text" placeholder="Search" className="search-bar-input" />
      <button className="search-bar-button">Search</button>
    </div>
  );
};

const LanguageSelector = (props: Props) => {
  return (
    <div className="language-selector">
      EN <span role="img">🇺🇸</span>
    </div>
  );
};

const SignIn = (props: Props) => {
  return (
    <div className="sign-in">Hello, sign in Account & Lists</div>
  );
};

const ReturnsOrders = (props: Props) => {
  return <div className="returns-orders">Returns & Orders</div>;
};

const Cart = (props: Props) => {
  return <div className="cart">CART</div>;
};

export default Test;
