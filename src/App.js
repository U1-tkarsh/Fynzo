import React from "react";
import CheckBox from "./component/CheckBox";
import Dropdown from "./component/Dropdown";
import InputText from "./component/InputText";
import RadioButton from "./component/RadioButton";
import UploadFile from "./component/UploadFile";
import Submit from "./component/Submit";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/"></Link>
        <Link to="/CheckBox"></Link>
        <Link to="/Dropdown"></Link>
        <Link to="/UploadFile"></Link>
        <Link to="/InputText"></Link>
        <Link to="/Submit"></Link>

        <Routes>
          <Route path="/InputText">
            <InputText />
          </Route>
          <Route path="/CheckBox">
            <CheckBox />
          </Route>
          <Route path="/Dropdown">
            <Dropdown />
          </Route>
          <Route path="/UploadFile">
            <UploadFile />
          </Route>
          <Route path="/Submit">
            <Submit/>
          </Route>
          <Route path="/">
            <RadioButton />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Button/> */}
    </div>
  );
}

export default App;
