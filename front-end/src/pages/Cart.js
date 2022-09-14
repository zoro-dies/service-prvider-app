
import React from "react"
import '../App.css';
import SideBar from "./Components/SideBar"
import Header from "./Components/Header";

function Cart() {
    
    return(
        <div>
               
          <Header/>
          <SideBar />

          <div className = "cartHeader"> 
            <h1>Checkout Page</h1>
          </div>

          <div className = "cartContainer">
            
            <div className="card"> 
                <div className="cartTitle">Shopping Cart</div>

                <div className="prodContainer">

                    <div className="cartImage">
                    <img className="cartImg" src = "/fb.jpeg" alt = "Logo" />
                    </div>

                    <div className="description">
                        
                        <div> facebook services </div>

                        <div> $40</div>
                    </div>
                
                </div>


                <div className="prodContainer">

                    <div className="cartImage">
                    <img className="cartImg" src = "/fb.jpeg" alt = "Logo" />
                    </div>

                    <div className="description">
                        
                        <div> facebook services </div>

                        <div> $40</div>
                    </div>
                
                </div>


                <div className="prodContainer">

                    <div className="cartImage">
                    <img className="cartImg" src = "/fb.jpeg" alt = "Logo" />
                    </div>

                    <div className="description">
                        
                        <div> facebook services </div>

                        <div> $40</div>
                    </div>
                
                </div>



            </div>

            <div className="summary"> 
                <div className="cartTitle">
                    Summary
                </div>

                

            </div>



          </div>
        </div>
    )
}

export default Cart