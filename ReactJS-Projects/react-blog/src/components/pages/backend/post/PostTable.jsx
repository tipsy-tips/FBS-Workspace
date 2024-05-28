import React from "react";
import { motion } from "framer-motion";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import {
  setIsActive,
  setIsAdd,
  setIsDelete,
} from "../../../../store/StoreAction";
import ModalDelete from "../../../partials/modals/ModalDelete";
import ModalConfirmed from "../../../partials/modals/ModalConfirm";
import { StoreContext } from "../../../../store/StoreContext";

const PostTable = ({ isLoading, isFetching, post, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isArchiving, setIsArchiving] = React.useState(0);
  const [id, setId] = React.useState("");

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsActive(true));
    setId(item.post_aid);
    setIsArchiving(0);
  };

  const handleRestore = (item) => {
    dispatch(setIsActive(true));
    setId(item.post_aid);
    setIsArchiving(1);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.post_aid);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="table-wrapper h-[700px] overflow-y-scroll relative">
        {/* {isFetching && <SpinnerFecthing />} */}
        <table>
          <thead className="sticky top-0 bg-primary z-10">
            <tr>
              <th className="w-[20px] text-nowrap"># AID</th>
              <th className="w-[150px]">Featured</th>
              <th className="w-[150px]">Title</th>
              <th className="w-[150px]">Author</th>
              <th className="w-[150px]">Category</th>
              <th className="w-[150px]">Tag</th>
              <th className="w-[150px]">Publish Date</th>
              <th className="w-[100px]">Action</th>
            </tr>
          </thead>
          <motion.tbody
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=""
          >
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
            )}
            {post?.data.length === 0 && (
              <tr className="no-data">
                <td colSpan={5}></td>
              </tr>
            )}
            {post?.data.map((item, key) => (
              <motion.tr key={key} variants={itemVariants}>
                <td>{item.post_aid}</td>
                <td>{item.post_is_featured === 1 ? "Yes" : ""}</td>
                <td>{item.post_title}</td>
                <td>{item.post_author}</td>
                <td>{item.category_title}</td>
                <td>{item.tag_title}</td>
                <td>{item.post_publish_date}</td>
                <td className="table-action">
                  <ul>
                    {item.post_is_active ? (
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
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      {store.isActive && (
        <ModalConfirmed
          position="center"
          queryKey="queryKey"
          endpoint={`/v1/post/active/${id}`}
          isArchiving={isArchiving}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          position="center"
          queryKey="queryKey"
          endpoint={`/v1/post/${id}`}
        />
      )}
    </>
  );
};

export default PostTable;
