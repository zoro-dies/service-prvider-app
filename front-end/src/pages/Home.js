import React from "react"
import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "./Components/SideBar";
import {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'

import {open} from '../redux/menuSlice'

function Home() {

  const menu = useSelector((state) => state.menu.value)
  const dispatch = useDispatch()
  console.log(menu)
  
 

    return (
      <div className="home">
        
        <div className="header">
            <div>
            <MenuIcon onClick={() => dispatch(open())}/> 
            </div>

            <div >
                <img className="header-logo" src = "logo.jpeg" alt = "Logo" />
            </div>
            
            <div>Home Page </div>
        </div>

        <SideBar />

        <div className="title">Social Media Services</div>

        <div className="homeContainer">
         
          
          <div className="productCard">
            <img className="productImg" src = "fb.jpeg" alt = "Logo" />
            <p>Facebook Services</p>
          </div>

          
            
          
          <div className="productCard">
          <img className="productImg" src = "insta.jpeg" alt = "Logo" />
          <p>Instagram Services</p>
          </div>

          <div className="productCard">
          <img className="productImg" src = "twitter.jpeg" alt = "Logo" />
          <p>Twitter Services</p>
          </div>
          
        </div>
          
        

      </div>
    );
  }

  export default Home