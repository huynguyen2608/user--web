import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './app';
import "./Styles/index.scss";

const Root = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById("root"));

export default Root;