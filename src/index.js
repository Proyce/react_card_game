import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import css from "./styles/styles.css";
import { Fragment } from "react";
import 'font-awesome/css/font-awesome.min.css';
// import Script from "./components/script";


ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));