import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import DragDrop from "./DragDrop";
import FetchData from "./FetchData";

const SearchandUpload = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [clear, setClear] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisplaySearch(false);
    if (inputVal.length === 0) return;

    searchHandler(inputVal);

    // setTimeout(() => {
    // }, 100);
  }, [inputVal]);

  const searchHandler = async function (input) {
    try {
      setLoading(true);
      setDisplaySearch(true);
      const query = input.toLowerCase();

      const images = await FetchData(query);

      if (images.length === 0) {
        setSearchItems([]);
        throw new Error();
      }

      setError(false);
      setSearchItems(images);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  const clearInput = () => {
    setInputVal("");
    setClear(false);
  };

  return (
    <section className="mt-14 sm:mt-16 md:mt-32 flex flex-col gap-3 sm:gap-10 md:gap-14">
      <aside className="flex gap-2 md:gap-6 sm:px-5 md:p-0 ">
        <button className="text-primary-300  text-sm sm:text-base md:text-xl px-2 sm:px-4 md:px-8 rounded-md flex items-center gap-1 bg-secondary-100 hover:bg-secondary-200 transition-colors  duration-500">
          Upload
          <Icon icon="humbleicons:upload" className="text-xl" />
        </button>
        <form className="w-full md:max-w-3xl h-9 md:h-12 px-2.5 rounded-md border border-primary-100 justify-between items-center gap-2.5 flex  text-primary-100">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] placeholder:text-sm md:placeholder:text-xl placeholder:text-primary-200 outline-0 bg-transparent"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onFocus={() => setClear(true)}
          />
          <aside className="sm:text-xl">
            {!clear && <Icon icon="tabler:search" />}
            {clear && <Icon icon="octicon:x-16" onClick={clearInput} />}
          </aside>
        </form>
      </aside>
      {displaySearch && (
        <aside>
          {!error && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Results
            </h2>
          )}
          {error && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-100 flex justify-center items-start gap-4">
              <Icon
                icon="mingcute:alert-line"
                className="text-2xl  md:text-4xl"
              />
              {`No Image available for your query "${inputVal}"`}{" "}
            </h2>
          )}
        </aside>
      )}

      {displaySearch && <DragDrop items={searchItems} loading={loading} />}
    </section>
  );
};

export default SearchandUpload;
