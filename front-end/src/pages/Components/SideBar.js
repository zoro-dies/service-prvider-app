
import React, { useEffect } from "react"
import '../../App.css';
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import {useSelector, useDispatch} from 'react-redux'
import {close} from '../../redux/menuSlice'


function SideBar(props) {
    
  const menu = useSelector((state) => state.menu.value)
  const dispatch = useDispatch()
  console.log(menu)

    

      useEffect(() => {
        console.log("in UseEffect")
      }, menu)

    

    return (
      <div className = {`${menu}`}>
          <div className="sidebarHeader">  
            <div className="sidebarHeading">
              <p>Menu</p>
            </div>  
            <div className="closeIcon"> 
                <CloseIcon onClick={() => dispatch(close())}/>
            </div>
            </div>
      </div>
    );
  }

  export default SideBar