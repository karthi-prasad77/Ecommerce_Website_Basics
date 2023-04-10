import React, { useState } from 'react'
import { India } from '../../assets';
import { Link } from 'react-router-dom';
import Cart from "../Cart/Cart";
import "./Navbar.scss";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='flex'>
                    <img src={India} alt="" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <span>IND</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/products/3">Children</Link>
                </div>
                </div>
                <div className='center'>
                    <Link className="link" to="/">SPACESTORE</Link>
                </div>
                    <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">HomePage</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cart-icon" onClick={() => setOpen(!open)}>
                            <ShoppingCartIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar