import React from "react";

const styles = {
    border: "1px solid #ddd",
    "text-align": "left",
    padding: "8px"
}

const Cell = ({ data, type }) =>
  type === "header" ? (
    <th style={styles}>{data}</th>
  ) : (
    <td style={styles}>{data}</td>
  );

export default Cell;
