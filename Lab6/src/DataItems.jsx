import React from "react";

export const DataItems = ({ childData }) =>
  childData.map((element, index) => {
    return (
      <li className="list-item" key={index}>
        {element.title}
      </li>
    );
  });
