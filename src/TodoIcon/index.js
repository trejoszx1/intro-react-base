import React from "react";

import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

import "./TodoIcon.css";
const iconType = {
  // Condicionador remplaso claro a un if else
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

export function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container  Icon-container-${type}`}
      onClick={onClick}
    >
      {iconType[type](color)}
    </span>
  );
}
