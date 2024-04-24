import React from "react";
import { PiCaretRight } from "react-icons/pi";

const FormSubscribe = () => {
  return (
    <div>
      <form action="" className="flex gap-3 items-center justify-center">
        <div className="input__wrapper mb-0 flex-none w-[400px] ">
          <input type="text" name="email" required />
          <label htmlFor="email">Email Adress</label>
        </div>
        <button className="rounded-md bg-accent p-4 text-xl flex gap-3 items-center">
          Get Started <PiCaretRight />
        </button>
      </form>
    </div>
  );
};

export default FormSubscribe;
