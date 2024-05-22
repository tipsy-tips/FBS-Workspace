import React from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import ModalConfirmed from "../../../../partials/modals/ModalConfirm";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setIsActive,
  setIsAdd,
  setIsDelete,
} from "../../../../../store/StoreAction";

const SkillsListTable = ({ isLoading, isFetching, skills, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isArchiving, setIsArchiving] = React.useState(0);
  const [id, setId] = React.useState("");

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.skills_aid);
    setIsArchiving(0);
  };
  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.skills_aid);
    setIsArchiving(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.skills_aid);
  };
  return (
    <>
      <div className="table-wrapper h-[700px] overflow-scroll relative">
        {/* {isFetching && <SpinnerFecthing />} */}
        <table>
          <thead className="sticky top-0 bg-primary z-10">
            <tr>
              <th className="w-[20px]"># AID</th>
              <th className="w-[150px]">Paragraph List</th>
              <th className="w-[150px]">Date Created</th>
              <th className="w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {isLoading && (
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
              </tr>
            )}

            {skills?.data.length === 0 && (
              <tr className="no-data">
                <td colSpan={5}></td>
              </tr>
            )}

            {skills?.data.map((item, key) => (
              <tr key={key}>
                <td>{item.skills_aid}</td>
                <td>{item.skills_list}</td>
                <td>{item.skills_created}</td>
                <td className="table-action">
                  <ul>
                    {item.skills_is_active ? (
                      <>
                        <li>
                          <button
                            onClick={() => handleEdit(item)}
                            className="tooltip"
                            data-tooltip="Edit"
                          >
                            <LiaEdit />
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleArchive(item)}
                            className="tooltip"
                            data-tooltip="Archive"
                          >
                            <PiArchive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button
                            onClick={() => handleRestore(item)}
                            className="tooltip"
                            data-tooltip="Restore"
                          >
                            <LiaHistorySolid />
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(item)}
                            className="tooltip"
                            data-tooltip="Delete"
                          >
                            <LiaTrashAltSolid />
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {store.isActive && (
        <ModalConfirmed
          position="center"
          queryKey="queryKey"
          endpoint={`/v1/skills/active/${id}`}
          isArchiving={isArchiving}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          position="center"
          queryKey="queryKey"
          endpoint={`/v1/skills/${id}`}
        />
      )}
    </>
  );
};

export default SkillsListTable;
