import React from "react"
import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "./Components/SideBar";
import {useState} from "react"

function Home() {

  const [menuState,setMenuState] = useState("closed");

  const handleClick = ()=>{
    
    if(menuState === "closed"){
      setMenuState("opened")
    }
    else{
      setMenuState("closed")
    }
    console.log(menuState);
  }
 

    return (
      <div className="home">
        
        <div className="header">
            <div>
            <MenuIcon onClick = {handleClick}/> 
            </div>

            <div >
                <img className="header-logo" src = "logo.jpeg" alt = "Logo" />
            </div>
            
            <div>Home Page </div>
        </div>

          <SideBar sideBarState = {menuState}/>
          
        

      </div>
    );
  }

  export default Home