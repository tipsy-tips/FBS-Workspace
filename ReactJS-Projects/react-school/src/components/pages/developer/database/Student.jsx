import React from "react";
import Navigation from "../../../partials/Navigation";
import Header from "../../../partials/Header";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Student = () => {
  return (
    <section className="flex">
      <Navigation />
      <main className="w-[calc(100%-270px)]">
        <Header />
        <div className="main-wrapper px-4 py-3">
          <div className="flex justify-between items-center">
            <h1>Database</h1>
            <form action="" className="relative">
              <input
                type="text"
                placeholder="Search for Student, teacher, document..."
                className="p-1 px-10 outline-none rounded-lg bg-stone-100 border-stone-800 border placeholder:text-stone-600 truncate"
              />
              <FaSearch className="absolute top-2 left-2 text-gray-500" />
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Student;
