import icon1 from "../../assets/Burguer.png";
import icon2 from "../../assets/Cocktail.png";
import icon3 from "../../assets/Nigiri.png";
import icon4 from "../../assets/Wine.png";
import icon5 from "../../assets/home.png";
import icon6 from "../../assets/cart.png";
import icon7 from "../../assets/menu.png";
import { Link } from "react-router-dom";



interface appProps {
    changeMenu?: any;
    selectedMenu:any;
    setType:any;
}

export default function BottomBar({setType,changeMenu,selectedMenu}:appProps){
    return(
        <div className="onlyMobile" style={{ background: "#041A17", width: "100%", position: "fixed", bottom: "0", height: "6vh", color: "white", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px 5px 0 0", padding: "0 5%", zIndex:"2" }}>
          
            <div className={"activeMenu"} onClick={()=>{setType(1)}}><img width={35} src={icon5} /></div>
            <div className={"activeMenu"} onClick={()=>{setType(2)}}>
                {/* <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="30" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="20" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="10" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect></svg> */}
                <img width={35} src={icon7} />
            </div>
            <div className={"activeMenu"} ><Link to={'/cart'}> <img width={35} src={icon6} /></Link></div>
            {/* <div className={selectedMenu == 4 ? "activeMenu" : ""} onClick={() => changeMenu(4)}><img width={70} src={icon4} /></div> */}
        </div>
    )
}