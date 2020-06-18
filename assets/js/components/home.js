//packages imports
import React, {Component} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";

//components imports
import Config from "./config";
import Reservation from "./reservation";
import Historique from "./historique";

class Home extends Component {
    render() {
        return (
            <div>
                {/*-----navbar------*/}
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
                {/*-----/navBar----*/}

                {/*----roots-----*/}
                <Switch>
                    <Redirect exact from="/" to="/config" />
                    <Route path="/config" component={Config} />
                    <Route path="/reservation" component={Reservation} />
                    <Route path="/historique" component={Historique} />
                </Switch>
                {/*------/roots---*/}
            </div>
        );
    }
}

export default Home;