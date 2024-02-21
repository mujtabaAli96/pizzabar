import { Link } from "react-router-dom";
import "./style.css";
export default function CheckoutPage(){
    return(
        <div className="mobile-responsive">
            <div style={{display:"flex",flexDirection:"column" , zIndex:"1", color:"#00a99d", position:"absolute",marginTop:"3.5rem",width:"100%", alignItems:"center"}}>
                <div style={{display:"flex",width:"100%"}}>
                    <Link style={{width:"20%",textAlign:"center"}}  to="/">
                        {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 365.57 341.09" width="1.3rem" style="width: 1.3rem;"><path d="m488.11 353.84-287 131.27a18.76 18.76 0 0 1-26.56-17.06V205.52a18.76 18.76 0 0 1 26.56-17.06l287 131.27a18.75 18.75 0 0 1 0 34.11Z" transform="translate(-154 -166.24)" style="fill: none; stroke: rgb(255, 255, 255); stroke-miterlimit: 10; stroke-width: 41;"></path></svg> */}
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.005 5-8 7 8 7M3.005 12H21" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>        
                    </Link>
                    <h3 style={{ marginLeft:"4rem"}}>Checkout</h3>
                </div>
                
                <div className="checkout-input">
                    <input placeholder="Mobile Number"></input>
                </div>
                <div className="checkout-input">
                    <input placeholder="Name"></input>
                </div>
                <div className="checkout-input">
                    <input placeholder="Address"></input>
                </div>
                {/* <div className="checkout-input">
                    <input width={"70%"} placeholder="Mobile Number"></input>
                </div>
                 */}
            </div>
            <div className="btn-container-checkout">
                <Link className="cart-btn" style={{background:"#00a99d", width:"80%"}} to="/checkout">
                    Place Order
                </Link>
            </div>
        </div>
    )
}