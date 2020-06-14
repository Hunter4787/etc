import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../css/app.css';
import Home from './components/home';
import HotelContextProvider from "./context/hotelContext";
import Config from "./components/config";
import Reservation from "./components/reservation";
import Historique from "./components/historique";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src="https://previews.123rf.com/images/mushan/mushan1804/mushan180400124/99489983-h%C3%B4tel-or-%C3%A9tiquette-ic%C3%B4ne-illustration-vectorielle.jpg" />
                    <nav>
                        <ul>
                            <li><Link to ={"/config"} >Configuration</Link></li>
                            <li><Link to ={"/reservation"} >Reservation</Link></li>
                            <li><Link to ={"/historique"} >Historique</Link></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/*<Redirect exact from="/" to="/config" />*/}
                    <Route path="/" component={Home} />
                    <Route path="/config" component={Config} />
                    <Route path="/reservation" component={Reservation} />
                    <Route path="/historique" component={Historique} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));