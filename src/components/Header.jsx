import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import youtube from "../assets/youtube.png";
import Sidebar from "./Sidebar";
import { SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../redux/searchSlice";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(searchCache);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggestions(searchCache[query]);
      } else {
        handleQuery();
      }
      if (query.length == 0) {
        setSuggestions([]);
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const handleQuery = async (e) => {
    const data = await fetch(SEARCH_API + query);
    const json = await data.json();
    // console.log(json[1]);
    dispatch(cacheResult({ [query]: json[1] }));
    setSuggestions(json[1]);
  };
  // onKeyPress={handleKeyPress}
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Run your function when the Enter key is pressed
      navigate(`/search/${query}`);
      setQuery("");
      // You can replace the alert with your custom function call
    }
    // alert(e.target.value);
  };

  const handleLinks = (suggest) => {
    navigate(`/search/${suggest}`);
    setQuery("");
    // alert(suggest);
  };
  return (
    <header className=" bg-black sticky top-0">
      <nav className="flex justify-between items-center py-3 px-5">
        <div className="left flex gap-5 items-center">
          <AiOutlineMenu
            className="text-white w-6 h-6"
            onClick={() => setOpen(true)}
          />
          <Link
            to="/"
            className=" items-center  text-xl font-bold  sm:flex hidden"
          >
            <img src={youtube} alt="" className="w-9 h-9 flex-1" />
            <h3>YouTube</h3>
          </Link>
        </div>

        <div className="relative center border-2 border-gray-500 px-3 items-center flex  bg-black w-[600px] rounded-full sm:ml-0 ml-5">
          <input
            type="text"
            placeholder="Search..."
            className=" outline-none w-full py-2 border-none"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={handleKeyPress}
          />
          <AiOutlineSearch className="w-7 h-7 rounded-r-full  text-gray-500 " />

          <div className="  w-screen sm:w-full absolute -left-36 sm:left-0 top-12">
            {suggestions.length > 0 && (
              <div className="leading-8 px-4 py-2 bg-gray-900 rounded-lg shadow-lg">
                {/* <div className="leading-8 px-4 py-2 bg-red-700 sm:bg-gray-900 rounded-lg shadow-lg"> */}
                {suggestions?.map((suggest) => {
                  return (
                    // <Link
                    //   to={`/search/${suggest}`}
                    //   className="text-white font-bold text-sm bg-transparent  hover:bg-slate-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center"
                    // >
                    //   <AiOutlineSearch className="w-5 h-5 bg-transparent    " />
                    //   {suggest}
                    // </Link>
                    <li
                      //  to={`/search/${suggest}`}
                      onClick={() => handleLinks(suggest)}
                      className="text-white font-bold text-sm bg-transparent  hover:bg-slate-500 p-3 rounded-lg cursor-pointer flex gap-3 items-center"
                    >
                      <AiOutlineSearch className="w-5 h-5 bg-transparent    " />
                      {suggest}
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="col-span-10 px-10"></div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
