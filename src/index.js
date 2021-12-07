import React from 'react'
import ReactDom from 'react-dom'
import './global.less'
import App from './App.js'

import { BrowserRouter } from "react-router-dom";

ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))