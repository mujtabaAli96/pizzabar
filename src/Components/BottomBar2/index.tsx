import icon1 from "../../assets/bowl.png";
import icon2 from "../../assets/corn.png";
import icon3 from "../../assets/cup.png";
import icon4 from "../../assets/pizza.png";
import icon5 from "../../assets/burger.png";

interface appProps {
    changeMenu?: any;
    selectedMenu:any;
}

export default function BottomBar2({changeMenu,selectedMenu}:appProps){
    return(
        <div style={{ background: "transparent", width: "100%", position: "fixed", bottom: "80px", height: "8vh", color: "white", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px 5px 0 0", padding: "0 5%", zIndex:"2" }}>
            <div className={selectedMenu == 1 ? "activeMenu2" : "menu"} onClick={() => changeMenu(1)}><img width={35} src={icon1} /></div>
            <div className={selectedMenu == 2 ? "activeMenu2" : "menu"} onClick={() => changeMenu(2)}><img width={35} src={icon2} /></div>
            <div className={selectedMenu == 3 ? "activeMenu2" : "menu"} onClick={() => changeMenu(3)}> <img width={40} src={icon5} /></div>
            <div className={selectedMenu == 4 ? "activeMenu2" : "menu"} onClick={() => changeMenu(4)}><img width={40} src={icon4} /></div>
            <div className={selectedMenu == 5 ? "activeMenu2" : "menu"} onClick={() => changeMenu(4)}><img width={40} src={icon3} /></div>

        </div>
    )
}