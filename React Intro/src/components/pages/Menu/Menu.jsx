import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer/Footer";
import SubFooter from "../partials/Sub-Footer/SubFooter";
import MenuDrinks from "./MenuDrinks";
import MenuFoods from "./MenuFoods";
import MenuAtHomeCoffee from "./MenuAtHomeCoffee";
import MenuMerchandise from "./MenuMerchandise";

const Menu = () => {
  const [menuTab, setMenuTab] = React.useState("drinks");

  const handleChangeMenu = (menu) => {
    setMenuTab(menu);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid grid-cols-[20%_1fr] my-40">
          <aside>
            <ul className="space-y-5">
              <li>
                <button onClick={() => handleChangeMenu("drinks")}>
                  Drinks
                </button>
              </li>
              <li>
                <button onClick={() => handleChangeMenu("food")}>Food</button>
              </li>
              <li>
                <button onClick={() => handleChangeMenu("ahcoffee")}>
                  At Home Coffee
                </button>
              </li>
              <li>
                <button onClick={() => handleChangeMenu("merchandise")}>
                  Merchandise
                </button>
              </li>
            </ul>
          </aside>

          <main>
            <h2>Menu</h2>
            {menuTab === "drinks" && <MenuDrinks />}
            {menuTab === "food" && <MenuFoods />}
            {menuTab === "ahcoffee" && <MenuAtHomeCoffee />}
            {menuTab === "merchandise" && <MenuMerchandise />}
          </main>
        </div>
      </div>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default Menu;
