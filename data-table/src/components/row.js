import React from "react";
import Cell from "./cell";

const Row = ({ data }) => (
    <tr className="row">
        {
            data.map(cell => (
                <Cell data={cell}/>
            ))
        }
    </tr>
)

export default Row;
