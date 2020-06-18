//packages imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//css link
import '../css/app.css';

//component import
import Home from './components/home';

//matchhing component app with component with id = 'root' in rendering
ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));