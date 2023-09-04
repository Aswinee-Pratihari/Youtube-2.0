// src/components/ButtonGroup.js

import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap max-w-full p-6">
      <div className="inline-block">
        {buttons?.map((button, index) => (
          <CustomButton button={button} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
