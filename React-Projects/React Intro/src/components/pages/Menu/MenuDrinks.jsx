import React from "react";
import { drinks } from "./data";

const MenuDrinks = () => {
  return (
    <div className="mb-10">
      <h4 className="text-xl font-bold mb-10 border-b border-gray-200 py-5">
        Drinks
      </h4>
      <div className="grid grid-cols-2 gap-5">
        {drinks.map((item, key) => (
          <div className="flex gap-6 items-center" key={key}>
            <img
              src={`${item.img}`}
              className="rounded-full size-[110px]"
              alt=""
            />
            <h5 className="text-base font-bold">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDrinks;
