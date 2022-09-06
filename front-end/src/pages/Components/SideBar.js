
import React from "react"
import '../../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"

function SideBar(props) {
    
    const [menuState,setMenuState] = useState(props.sideBarState);

    const handleClick = ()=>{
    
        if(menuState === "closed"){
          setMenuState("opened")
        }
        else{
          setMenuState("closed")
        }
        console.log(menuState);
      }

    console.log("in side Bar", props.sideBarState)

    return (
      <div className = {`${props.sideBarState}`}>
        SideBar  
      </div>
    );
  }

  export default SideBar