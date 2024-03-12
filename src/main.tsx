import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import "./style.css";

interface DataContextInterface {
  menu: any; // Or any appropriate type for your menu items
  setMenu: any; // Function type for setMenu
  selectedMenu: any; // Or any suitable type for selected menu
  setSelectedMenu: any; // Function type for setSelectedMenu
  cart: any;
  setCart: any;
  restaurant: any; // Or any appropriate type for your menu items
  setRestaurant: any; // Function type for setMenu
}

export const DataContext = createContext<DataContextInterface>({
  menu: [], // Initial value for menu, can be empty array or null depending on your data structure
  setMenu: () => {}, // Function for setMenu (empty function for now)
  selectedMenu: null, // Initial value for selectedMenu
  setSelectedMenu: () => {}, // Function for setSelectedMenu (empty function for now)
  cart: [],
  setCart: () => {},
  restaurant: {}, // Initial value for menu, can be empty array or null depending on your data structure
  setRestaurant: () => {}, // Function for setMenu (empty function for now)
});
function MainApp() {
  const [menu, setMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [resname, setResname] = useState("pizzabar");

  const getBasename = () => {
    if (resname) {
      return `/restaurant/${resname}`;
    }
    return "/";
  };

  useEffect(() => {
    // const hostname = window.location.hostname;
    const resName = window.location.pathname.split("/")[2];
    // setResname(resName);

    // const resName = hostname.split(".")[0];
    // const resName = "pizzabar";

    alert(resName)
    fetch(`https://admin.komandapp.com/api/v2/resturant/${resName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("dataa :", data.restaurant_data?.categories);
        setMenu(data?.restaurant_data?.categories);
        setRestaurant({logo:data?.restaurant_data?.icon})
      })
      .catch((error) => console.error("Error : ", error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        menu,
        setMenu,
        selectedMenu,
        setSelectedMenu,
        cart,
        setCart,
        restaurant,
        setRestaurant,
      }}
    >
      <BrowserRouter
      // basename="/pizabar"
      // basename={`/restaurant/${resname}`}
      >
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainApp />
  // <App />
);
