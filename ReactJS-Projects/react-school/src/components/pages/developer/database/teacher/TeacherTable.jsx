import React from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import TableLoader from "../../../../partials/TableLoader";
import IconNoData from "../../../../partials/svg/IconNoData";
import SpinnerFecthing from "../../../../partials/spinners/SpinnerFecthing";
import NoData from "../../../../partials/NoData";

const TeacherTable = ({ setShowInfo, showInfo }) => {
  const handleShowInfo = () => setShowInfo(true);
  return (
    <>
      <div className="table-wrapper relative">
        {/* <SpinnerFecthing /> */}
        <table>
          <thead>
            <tr>
              <th className="w-[20px]">#</th>
              <th className="w-[150px]">Name</th>
              <th className="w-[80px]">Class</th>
              <th className="w-[80px]">Age</th>
              <th className="w-[80px]">Gender</th>
              <th className="w-[80px]">Email</th>
              <th className="w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="max-w-sm animate-pulse">
              <td className="">
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
              <td>
                <div className="table-shimmer"></div>
              </td>
            </tr>
            <tr>
              <td colSpan={9}>
                <NoData />
              </td>
            </tr>
            <tr className="" onClick={handleShowInfo}>
              <td>1</td>
              <td>Sir June</td>
              <td>Science 4 Teacher</td>
              <td>22</td>
              <td>Male</td>
              <td>sir.jp.teacher@gmail.com</td>
              <td className="table-action">
                <ul>
                  <li>
                    <button className="tooltip" data-tooltip="Edit">
                      <LiaEdit />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Archive">
                      <PiArchive />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="History">
                      <LiaHistorySolid />
                    </button>
                  </li>
                  <li>
                    <button className="tooltip" data-tooltip="Delete">
                      <LiaTrashAltSolid />
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherTable;
