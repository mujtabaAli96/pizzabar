import { useContext, useEffect, useState } from "react";
import { Data } from "../../App";
import icon from '../../assets/addCart.png';
import icon2 from '../../assets/added.png';

import "../../style.css";
import { DataContext } from "../../main";
interface appProps {
    selectedMenu?: any;
    setType?:any;
    heading?:any;
    description?:any;
    price?:any;
    addToCart?:any;
    id?:string|number;
}

export default function Discription({heading,price,description,selectedMenu,setType,addToCart,id}:appProps){

  const { menu,setMenu, cart,setCart } = useContext(DataContext);
  const [expand,setExpand] = useState(false)
  const [refresh,setRefresh] = useState(false)
  const [isCart,setIsCart] =useState(
    cart?.some((item:number) => item == id)
    )
  // useEffect(()=>{},[refresh])
  function handleCartClick(){
    addToCart(id);
    setIsCart(true);
  }
  return(
        <div className={expand?"descriptionExpand":"description"}>
                  <div style={{width:"80%"}}>
                    <div style={{display:"flex",paddingLeft:"5px",fontSize:"18px"}}>
                      {/* <div style={{background:"black", height:"30px", width:"30px", borderRadius:"18px",marginRight:"5px"}}></div> */}
                      <b>{heading}</b>
                    </div>
                    <div style={{display:"flex",paddingLeft:"5px",fontSize:"16px"}}>
                      <b>${price}/-</b>
                    </div>
                    <div style={{marginTop:"0.3rem",textAlign:"left",paddingLeft:"5px",fontSize:"16px"}}>{description.length>45&&!expand?<>{description.slice(0,45)}...<span style={{color:"orange"}} onClick={()=>setExpand(!expand)}>Read More</span></>:<div >{description} {description.length>45?<span style={{color:"orange"}} onClick={()=>setExpand(false)}>Show Less</span>:null}</div>} </div>
                    {/* <div style={{marginTop:"0.5rem",textAlign:"left",paddingLeft:"5px"}}><h6>${Data?.[selectedMenu]?.price}</h6></div> */}
                  </div>
                  <div style={{width:"20%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {/* <div onClick={()=>setType(2)}>
                      <svg width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="17" width="20" height="4" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="10" width="20" height="4" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="3" width="20" height="4" rx="2" stroke="#fff" stroke-width="2"></rect></svg>
                    </div> */}
                    <div style={{height:"35px"}} >
                      {isCart?
                        <img style={{width:"30px",height:"auto"}}  src={icon2} />
                        // <svg width="25" height="25" fill="#00A99D" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7v10M17 12H7" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        :
                        <img style={{width:"30px",height:"auto"}} onClick={()=>handleCartClick()} src={icon} />
                        }

                      
                    </div>
                    {/* <div style={{paddingTop:"3px"}}>
                      <svg width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M20.369 5.11C17.549 1.022 12 3.435 12 7.589 12 3.434 6.451 1.02 3.631 5.11.717 9.339 3.59 16.745 12.001 21c8.41-4.255 11.282-11.661 8.368-15.89Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div> */}
                  </div>
                </div>
    )
}