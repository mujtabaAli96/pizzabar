import icon1 from "../../assets/Burguer.png";
import icon2 from "../../assets/Cocktail.png";
import icon3 from "../../assets/Nigiri.png";
import icon4 from "../../assets/Wine.png";
import icon5 from "../../assets/home.png";
import icon6 from "../../assets/cart.png";
import icon7 from "../../assets/menu.png";



interface appProps {
    changeMenu?: any;
    selectedMenu:any;
}

export default function BottomBar({changeMenu,selectedMenu}:appProps){
    return(
        <div style={{ background: "#041A17", width: "100%", position: "fixed", bottom: "0", height: "8vh", color: "white", display: "flex", alignItems: "center", justifyContent: "space-around", borderRadius: "5px 5px 0 0", padding: "0 5%", zIndex:"2" }}>
          
            <div className={"activeMenu"} onClick={() => changeMenu(2)}><img width={45} src={icon5} /></div>
            <div className={"activeMenu"} onClick={() => changeMenu(1)}>
                {/* <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="30" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="20" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect><rect x="2" y="10" width="35" height="5" rx="2" stroke="#fff" stroke-width="2"></rect></svg> */}
                <img width={45} src={icon7} />
            </div>
            <div className={"activeMenu"} onClick={() => changeMenu(3)}> <img width={40} src={icon6} /></div>
            {/* <div className={selectedMenu == 4 ? "activeMenu" : ""} onClick={() => changeMenu(4)}><img width={70} src={icon4} /></div> */}
        </div>
    )
}