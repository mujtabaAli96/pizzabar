import { useContext, useEffect, useState } from "react";
import { Data } from "../../App";
import icon from "../../assets/addCart.png";
import icon2 from "../../assets/added.png";
import downArrow from "../../assets/down-arrow.png";
import upArrow from "../../assets/up-arrow.png";

import "../../style.css";
import { DataContext } from "../../main";
interface appProps {
  selectedMenu?: any;
  setType?: any;
  heading?: any;
  description?: any;
  price?: any;
  addToCart?: any;
  id?: string | number;
  allergens?: [];
}

export default function Discription({
  heading,
  price,
  description,
  selectedMenu,
  setType,
  addToCart,
  id,
  allergens,
}: appProps) {
  const { menu, setMenu, cart, setCart } = useContext(DataContext);
  const [expand, setExpand] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isCart, setIsCart] = useState(
    cart?.some((item: number) => item == id)
  );
  // useEffect(()=>{},[refresh])
  function handleCartClick() {
    addToCart(id);
    setIsCart(true);
  }
  const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  useEffect(()=>{
    // alert(isIOS)
  })

  return (
    <div className={expand &&isIOS ? "ios-specific-description-expand":expand? "descriptionExpand":isIOS ? "ios-specific-description" : "description"}>
      <div
        style={{ width: "89%" }}
        className={expand ? "descriptionInnerExpand" : ""}
      >
        <div style={{ display: "flex", paddingLeft: "5px", fontSize: "18px" }}>
          {/* <div style={{background:"black", height:"30px", width:"30px", borderRadius:"18px",marginRight:"5px"}}></div> */}
          <b>{heading}</b>
        </div>
        <div style={{ display: "flex", paddingLeft: "5px", fontSize: "16px" }}>
          <b>${price}</b>
        </div>
        <div
          style={{
            marginTop: "0.3rem",
            textAlign: "left",
            paddingLeft: "5px",
            fontSize: "16px",
          }}
        >
          {description.length > 45 && !expand ? (
            <>
              {description.slice(0, 45)}...
              <span
                onClick={() => setExpand(!expand)}
                style={{ color: "orange" }}
              >
                Read More
              </span>
            </>
          ) : (
            <div>
              {description}{" "}
              {allergens && allergens?.length > 0 && 
                <div style={{ display: "flex",flexDirection:"row", margin: "5px 0", flexWrap: "wrap", height:"fit-content"}}>
                  {allergens?.map((item: any) => {
                    return (
                      <div style={{ display: "flex", width: "50%",gap:"10px", marginBottom:"5px", alignItems:"center" }}>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={"https://admin.komandapp.com/" + item?.icon_path}
                        />
                        <p>{item?.title}</p>
                      </div>
                    );
                  })}
                </div>
              }
              {description.length > 45 ? (
                <div
                  style={{
                    color: "orange",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "25px",
                  }}
                  onClick={() => setExpand(false)}
                >
                  <div>Show Less</div>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <img
                      style={{
                        width: "20px",
                        height: "15px",
                        marginLeft: "5px",
                      }}
                      src={upArrow}
                    />
                  </div>
                </div>
              ) : // <span
              //   style={{ color: "orange" }}
              //   onClick={() => setExpand(false)}
              // >
              //   <br />
              //   Show Less
              // </span>
              null}
            </div>
          )}{" "}
        </div>
        {/* <div style={{marginTop:"0.5rem",textAlign:"left",paddingLeft:"5px"}}><h6>${Data?.[selectedMenu]?.price}</h6></div> */}
      </div>
      <div
        style={{
          width: "10%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "right",

          bottom: "0",
        }}
      >
        <div style={{ height: expand ? "115px" : "115px" }}>
          {isCart ? (
            <img style={{ width: "30px", height: "auto" }} src={icon2} />
          ) : (
            <img
              style={{ width: "30px", height: "auto" }}
              onClick={() => handleCartClick()}
              src={icon}
            />
          )}
        </div>
      </div>
    </div>
  );
}
