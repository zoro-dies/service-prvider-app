import React from "react"
import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import SideBar from "./Components/SideBar"
import Header from "./Components/Header";
import {open} from '../redux/menuSlice'

function SingleService() {

    
  const menu = useSelector((state) => state.menu.value)
  const dispatch = useDispatch()
    return(
        <div>
            
          <Header/>

        <SideBar />

        <div className="title">Social Media Services</div>

            <div className='productWrapper'>

            
                <div className="imGContainer">
                    <img className="singleProductImg" src = "/fb.jpeg" alt = "Logo" />
                    
                </div>

                <div className="descContainer">

                    <div className = "prodInfo" >

                        <h1>Facebook Services</h1>

                        <div>We provide reliable facebook follower Services</div>

                        <div className="filterContainer"> 

                            <h2>Select Your Services</h2>

                            <div className="filter">

                            <div>

                                <input type="radio" value="follower" name="follower" /> Followers

                                </div>

                                <select name = "followers" className='select' >
                                    <option disabled >
                                        
                                    </option>
                                    
                                    <option>500</option>
                                    <option>750</option>
                                    <option>1000</option>
                                    <option>2000</option>
                                    <option>5000</option>


                                </select>
                            </div>

                            <div className="filter">

                                  <div>
                                    <input type="radio" value="like" name="like" /> Likes
                                    </div>

                                <select name = "likes" className='select' >
                                    <option disabled >
                                        
                                    </option>
                                    <option> 100 </option>
                                    <option>250</option>
                                    <option>500</option>
                                    <option>750</option>
                                    <option>1000</option>
                                    <option>2000</option>
                                    <option>5000</option>
                                </select>
                            </div>

 
                            <div className="filter">

                                <div>

                                <input type="radio" value="comment" name="comment" /> Comments

                                </div>
                                

                                <select name = "comments" className='select' >
                                    <option disabled >
                                        
                                    </option>
                                    <option> 100 </option>
                                    <option>250</option>
                                    <option>500</option>
                                    <option>750</option>
                                    <option>1000</option>
                                    
                                </select>
                            </div>



                        </div>

                        <div className = "buttonContainer">

                            <button className="button"> ADD TO CART</button>
                        </div>
                    </div>
                    
                </div>
        
                
            </div>



        </div>
        
        
    )
    
  }

  export default SingleService