import { Link } from "react-router-dom";
import image1 from "./assets/dish.png";

import "./style.css";

export default function Cart(){
    return(
        <div className="mobile-responsive">
            <div style={{display:"flex",flexDirection:"row" , zIndex:"1", color:"#00a99d", position:"absolute",marginTop:"3.5rem", justifyContent:"start", width:"100%"}}>
                <Link to="/" style={{width:"20%",textAlign:"center"}} >
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.005 5-8 7 8 7M3.005 12H21" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>        
                </Link>
            </div>
            <div className="menu-card-cart">
                <div className="menu-item">
                    <div className="cart-img">
                        <img width={"100px"} height={"100px"} style={{borderRadius:"12px"}} src={image1}/>
                    </div>
                    <div className="menu-description-cart">
                        <div>Croquetas de jamon</div>
                        
                        {/* <div className="view-more">View Detail</div> */}
                        <div style={{display:"flex",marginTop:"1rem",justifyContent:"space-around"}}>
                            <h5 style={{margin:"0"}}>$13.50</h5>
                            <div className="add-cart-count">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 11V17" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 11V17" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                <h4 style={{padding:"0 0.5rem",margin:"0"}}>1</h4> 
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 12H4" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="btn-container">
                <Link className="cart-btn" style={{background:"#FB7C00", width:"80%"}} to="/checkout">
                    Checkout
                </Link>
            </div>
    </div>
    )
}