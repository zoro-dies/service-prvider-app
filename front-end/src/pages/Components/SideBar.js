
import React, { useEffect } from "react"
import '../../App.css';
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';

function SideBar(props) {
    
    const [menuState,setMenuState] = useState(props.sideBarState);
    console.log("props", props.sideBarState)
    console.log("menu", menuState)

    const handleClick = ()=>{
    
        if(menuState === "opened"){
          setMenuState("closed")
        }
       
        console.log("handleclick", menuState);
      }

      useEffect(() => {
        console.log("in UseEffect")
      }, menuState)

    

    return (
      <div className = {`${props.sideBarState}`}>
          <div className="sidebarHeader">  
            <div className="sidebarHeading">
              <p>SideBar</p>
            </div>  
            <div> 
                <CloseIcon onClick = {handleClick}/>
            </div>
            </div>
      </div>
    );
  }

  export default SideBar