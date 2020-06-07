import React from "react";
import Row from "./row";

const Body = ({ data }) => data.map((row) => <Row data={row} />);


export default Body;
