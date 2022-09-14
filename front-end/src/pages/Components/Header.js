
import React, { useEffect } from "react"
import '../../App.css';
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import {open} from '../../redux/menuSlice'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from 'react-redux'

import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

  

function Header(props) {
    
    const menu = useSelector((state) => state.menu.value)
    const dispatch = useDispatch()
    console.log(menu)

    return (
        <div className="header">
            <div>
            <MenuIcon onClick={() => dispatch(open())}/> 
            </div>

            <div >
                <img className="header-logo" src = "/logo.jpeg" alt = "Logo" />
            </div>
            
            
            <div>
            <Link style = {{color : "inherit"}} to = "/cart">  

                <ShoppingCartIcon/>
            </Link>
               
            </div>
    </div>

    );
  }

  export default Header