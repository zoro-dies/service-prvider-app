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
        <div className='productWrapper'>


            
                <img  src = "twitter.jpeg" alt = "Logordt" />
           
      
            <div className='descContainer'>
                <h1>Title</h1>
                <p className='desc'>uhqskjaknc  lkqwsa  jd;kl  ewqkldq;  wskdl  ;wqsakd;sakd;sl''d' </p>
                <span className='price'> $ 100 </span>

                <div className='filtersContainer'>
                 
                    <span className='filterTitle'> Size </span>

                    <select className='select' name = "size"  >
                        <option disabled selected>
                            Size
                        </option>
                        <option>size</option>
                        
                        
                    </select>

                    </div>
                </div>

                <div className='addContainer'>

                    <div className='amountContainer'>
                        {/* <Remove /> */}
                        <span className='amount'> 1 </span>
                        {/* <Add /> */}
                    </div>

                    <button className='addButton' > Add To Cart</button>
                </div>

            </div>



        </div>
        
        
    )
    
  }

  export default SingleService