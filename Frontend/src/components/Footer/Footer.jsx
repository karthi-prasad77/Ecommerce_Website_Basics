import React from 'react';
import { Pay } from '../../assets';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in accusamus nobis quia sint inventore asperiores pariatur. Numquam labore sunt nesciunt tenetur placeat eum sint amet doloremque itaque! At, expedita!
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur enim, officia voluptatibus nostrum eos corporis ducimus, omnis ex cupiditate tenetur repellendus hic similique ratione expedita nemo quis magnam iste animi.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>Spacestore</span>
          <span className='copyright'>copyright
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src={Pay} alt="payment gateway" />
        </div>
      </div>
    </div>
  )
}

export default Footer