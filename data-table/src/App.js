import React from 'react';
import Header from "./components/header";
import Body from "./components/body";

const mock = {
  header: ["productName", "skuID", "quantity", "price"],
  body: [
    ["LED tv", "000001", "6", "$5600"],
    ["Iphone", "000300", "2", "$3400"],
    ["Pixel", "040000", "3", "$2300"],
    ["Galaxy Note", "767676", "4", "$4500"]
  ]
};

const styles = {
  margin: "auto",
  "margin-top": "100px"
}

function App() {
  return (
    <table style={styles}>
      <Header data={mock.header}/>
      <Body data={mock.body} />
    </table>
  );
}

export default App;
