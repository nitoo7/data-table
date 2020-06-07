import React from "react";
import Cell from "./cell";

const Header = ({ data }) => (
    <tr className="header">
        {
            data.map(cell => (
                <Cell data={cell} type="header" />
            ))
        }
    </tr>
)

export default Header;
