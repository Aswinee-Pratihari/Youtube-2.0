import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ button }) => {
  return (
    <Link
      to={`/search/${button}`}
      className="mr-4 px-4 py-2 text-sm bg-gray-900 text-white rounded-lg"
    >
      {button}
    </Link>
  );
};

export default CustomButton;
