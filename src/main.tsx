import React,{ createContext, useState }  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import "./style.css";

interface DataContextInterface {
  menu: any; // Or any appropriate type for your menu items
  setMenu: any; // Function type for setMenu
  selectedMenu: any; // Or any suitable type for selected menu
  setSelectedMenu: any; // Function type for setSelectedMenu
}

export const DataContext = createContext<DataContextInterface>({
  menu: [], // Initial value for menu, can be empty array or null depending on your data structure
  setMenu: () => {}, // Function for setMenu (empty function for now)
  selectedMenu: null, // Initial value for selectedMenu
  setSelectedMenu: () => {}, // Function for setSelectedMenu (empty function for now)
});
function MainApp(){
  const [menu,setMenu] = useState(null)
  const [selectedMenu, setSelectedMenu] = useState(1);


  return(
    <DataContext.Provider value={{menu,setMenu,selectedMenu,setSelectedMenu}}>
    <BrowserRouter basename="/pizabar">
      <Routes>
        <Route  path="/cart" element={<Cart/>} /> 
        <Route  path="/checkout" element={<CheckoutPage/>} /> 
        <Route  path="/" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </DataContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainApp/>
    // <App />
  
);
