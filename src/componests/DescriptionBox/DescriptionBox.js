import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripption</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce website is an online store where customers can find
          products, browse offerings, and place purchases online. It facilitates
          the transaction between a buyer and seller. A digital storefront can
          serve as the virtual equivalent of the product shelves, sales staff,
          and cash register of a physical shop.
        </p>
        <p>
          Electronic commerce (e-commerce) refers to companies and individuals
          that buy and sell goods and services over the internet. E-commerce
          operates in different types of market segments and can be conducted
          over computers, tablets, smartphones, and other smart devices. Nearly
          every imaginable product and service is available through e-commerce
          transactions, including books, music, plane tickets.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
