import React from "react"
import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import SideBar from "./Components/SideBar"

import {open} from '../redux/menuSlice'

function SingleService() {

    
  const menu = useSelector((state) => state.menu.value)
  const dispatch = useDispatch()
    return(
        <div>
            
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

            <div className='productWrapper'>

            
                <div className="imGContainer">
                    <img className="singleProductImg" src = "/fb.jpeg" alt = "Logo" />
                    
                </div>

                <div className="descContainer">
                    <h1>Title</h1>
                </div>
        

            </div>



        </div>
        
        
    )
    
  }

  export default SingleService