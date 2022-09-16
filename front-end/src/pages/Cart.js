
import React from "react"
import '../App.css';
import SideBar from "./Components/SideBar"
import Header from "./Components/Header";
import CloseIcon from '@mui/icons-material/Close';

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

                    <CloseIcon  className="removeItem"/>
                
                </div>


                <div className="prodContainer">

                    <div className="cartImage">
                    <img className="cartImg" src = "/fb.jpeg" alt = "Logo" />
                    </div>

                    <div className="description">
                        
                        <div> facebook services </div>

                        <div> $40</div>
                    </div>
                    <CloseIcon  className="removeItem"/>
                </div>


                <div className="prodContainer">

                    <div className="cartImage">
                    <img className="cartImg" src = "/fb.jpeg" alt = "Logo" />
                    </div>

                    <div className="description">
                        
                        <div> facebook services </div>

                        <div> $40</div>
                    </div>
                    <CloseIcon  className="removeItem"/>
                
                </div>



            </div>

            <div className="summary"> 

                <div className="cartTitle">
                    Summary
                </div>


                <div className = "summaryRow">
                    <div className="summaryItem">Subtotal</div>
                    <div className="summaryPrice" > 556 $</div>
                </div>

                <div className = "summaryRow">
                    <div className="summaryItem">Number of Items</div>
                    <div className="summaryPrice" > 5</div>
                </div>

                <div className = "summaryRow">
                    <div className="summaryItem">Total</div>
                    <div className="summaryPrice" > 556 $</div>
                </div>


                <div  className="checkoutDiv" >
                
                    <button className = "checkoutBtn"> Proceed</button>

                </div>
                
            </div>

            
          </div>
        </div>
    )
}

export default Cart