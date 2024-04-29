import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { TbPhotoQuestion } from "react-icons/tb";
import { movies } from "./data";
import { baselmgUrl } from "../../Helpers/functions-general";

const ModalSearch = ({ setSearch }) => {
  const [result, setResult] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  const getSearchResult = () =>
    setResult(
      movies.find(
        (movie) => movie.title.toLowerCase() === keyword.toLowerCase()
      )
    );

  const handleClose = () => setSearch(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0  isolate w-full h-full z-10 text-white">
      <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
      <main className="max-w-[700px] min-h-[80px] bg-[#181818] w-full absolute left-1/2 top-[200px] -translate-x-1/2 z[10] rounded-md">
        <div className="relative p-3">
          <input
            type="text"
            className="outline-none focus:border-accent w-full  border-b border-stone-500 px-4 py-5 bg-transparent placeholder:opacity-30"
            placeholder=". . ."
            onChange={(e) => handleKeyword(e)}
          />
          <button
            className="absolute top-10 right-6 text-xl"
            onClick={getSearchResult}
          >
            <FaSearch />
          </button>

          {result.length !== 0 ? (
            <div className="result">
              <h3 className="font-Bold my-5 text-lg opacity-50 text-sm">
                Results keyword:{" "}
                <span className="text-white opacity-100">"{keyword}"</span>
              </h3>
              <div className="grid grid-cols-[1fr_2.5fr] gap-5">
                <img
                  src={`${baselmgUrl}/Movies/${result.image}`}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
                <div>
                  <ul className="space-y-3">
                    <li className="text-xl font-Bold ">
                      {result.title} -
                      <span className="mx-1 p-0.5 border border-white text-[10px]">
                        {result.rating}
                      </span>
                      <span className="mx-1 p-0.5 border border-white text-[10px]">
                        HD
                      </span>
                      <span className="text-sm">{result.year}</span>
                    </li>
                    <li>{result.cast}</li>
                    <li>{result.genre}</li>
                    <li className="text-sm">{result.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="result-non py-8 flex flex-col items-center opacity-20">
              <TbPhotoQuestion className="text-9xl mb-3" />
              <h3 className="text-xl">No such movie exists!</h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ModalSearch;
