import React from "react";
import Navigation from "../../../../partials/Navigation";
import HeaderDB from "../../../../partials/HeaderDB";
import ProjectsTable from "./ProjectsTable";
import { FaPlus } from "react-icons/fa";
import useQueryData from "../../../../custom-hook/useQueryData";
import { setIsAdd } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import ModalAddProjects from "./ModalAddProjects";
import ModalError from "../../../../partials/modals/ModalError";
import Toast from "../../../../partials/Toast";

const ProjectsDB = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSearch, setIsSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState("");

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);

    console.log(store.isAdd);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: projects,
  } = useQueryData(
    isSearch ? "/v1/projects/search" : "/v1/projects", // endpoint
    isSearch ? "post" : "get", // method
    "queryKey", // key
    {
      searchValue: keyword,
    }
  );

  return (
    <>
      <section className="flex overflow-x-hidden">
        <Navigation />
        <main className="w-[calc(100%-270px)]">
          <HeaderDB />
          <div className="flex relative">
            <div className="main-wrapper overflow-hidden max-h-[calc(100vh-65px)] transition-all px-4 py-3 w-full">
              <div className="flex justify-between items-center">
                <h1 className="font-bold">Projects</h1>
              </div>
              <div className="tab flex items-center justify-between mt-4 border-b border-line pb-4">
                <form action="" className="relative">
                  {/* <Searchbar
                    setIsSearch={setIsSearch}
                    setKeyword={setKeyword}
                  /> */}
                </form>
                <button
                  onClick={handleAdd}
                  className="btn btn--accent font-bold"
                >
                  <FaPlus className="" /> Add new
                </button>
              </div>
              <ProjectsTable
                projects={projects}
                isLoading={isLoading}
                isFetching={isFetching}
                setItemEdit={setItemEdit}
              />
            </div>
          </div>
        </main>
        {store.isAdd && <ModalAddProjects itemEdit={itemEdit} />}
        {store.success && <Toast />}
        {store.error && <ModalError position="center" />}
      </section>
    </>
  );
};

export default ProjectsDB;
