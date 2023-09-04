import React from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineCamera,
} from "react-icons/ai";
import { CiFootball } from "react-icons/ci";
import { BsMusicNote } from "react-icons/bs";
import { FaGamepad, FaTheaterMasks } from "react-icons/fa";
// FaTheaterMasks
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";
const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute h-screen top-0 bottom-0 px-3 py-3 shadow-gray-500 w-[200px] transition-all duration-500 shadow-lg  ${
        open ? "translate-x-0" : "-translate-x-52"
      }`}
    >
      <div className="top flex items-center gap-2 text-xl font-bold mb-5">
        <AiOutlineMenu
          className="text-white w-6 h-6"
          onClick={() => setOpen(false)}
        />
        <img src={youtube} alt="" className="w-9 h-9" />
        <h3>YouTube</h3>
      </div>

      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <AiOutlineHome className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Home</h5>
      </Link>

      <Link
        to={`/search/sports`}
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <CiFootball className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Sports</h5>
      </Link>

      <Link
        to={`/search/music`}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
        onClick={() => setOpen(false)}
      >
        <BsMusicNote className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Music</h5>
      </Link>

      <Link
        to={`/search/drama`}
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <FaTheaterMasks className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Drama</h5>
      </Link>

      <Link
        to={`/search/learning`}
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <AiOutlineBook className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Learning</h5>
      </Link>

      <Link
        to={`/search/gaming`}
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <FaGamepad className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Gaming</h5>
      </Link>

      <Link
        to={`/search/movies`}
        onClick={() => setOpen(false)}
        className="flex gap-3 text-white py-3 px-4 hover:bg-gray-800 rounded-lg cursor-pointer items-center"
      >
        <AiOutlineCamera className="text-white w-6 h-6 bg-transparent" />
        <h5 className="text-base font-normal bg-transparent">Movies</h5>
      </Link>
    </div>
  );
};

export default Sidebar;
