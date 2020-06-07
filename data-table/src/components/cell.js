import React from "react";

const Cell = ({ data, type }) =>
  type === "header" ? (
    <th className="cell">{data}</th>
  ) : (
    <td className="cell">{data}</td>
  );

export default Cell;
