import React from "react";
import Navigation from "../../../../partials/Navigation";
import Header from "../../../../partials/Header";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import StudentTable from "./StaffTable";
import DatabaseInfo from "./DatabaseStaff";

const Staff = () => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <>
      <section className="flex overflow-x-hidden">
        <Navigation />
        <main className="w-[calc(100%-270px)]">
          <Header />
          <div className="flex relative">
            <div
              className={`main-wrapper transition-all px-4 py-3 ${
                showInfo ? "w-3/4" : "w-full"
              }`}
            >
              <div className="flex justify-between items-center">
                <h1>Staff Database</h1>
                <form action="" className="relative">
                  <input
                    type="text"
                    placeholder="Search for staffs"
                    className="p-1 px-10 outline-none rounded-lg bg-secondary border-stone-800 border placeholder:text-white placeholder:opacity-20 truncate"
                  />
                  <FaSearch className="absolute top-[9px] left-2 text-gray-500" />
                </form>
              </div>
              <DatabaseInfo showInfo={showInfo} setShowInfo={setShowInfo} />
              <div className="tab flex items-center justify-between mt-8 border-b border-line mb-8">
                <ul className="flex">
                  <li className="tab-link">
                    <Link to="/database/student">Student</Link>
                  </li>
                  <li className="tab-link">
                    <Link to="/database/teacher">Teacher</Link>
                  </li>
                  <li className="tab-link active">
                    <Link to="/database/staff">Staff</Link>
                  </li>
                </ul>
                <button className="btn btn--accent font-bold">
                  <FaPlus className="" /> Add new
                </button>
              </div>
              <StudentTable showInfo={showInfo} setShowInfo={setShowInfo} />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Staff;
