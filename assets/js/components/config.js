import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Reservation from "./reservation";

class Config extends Component {
    constructor() {
        super();
    }

    handlechange(e) {
        localStorage.setItem([e.target.name], e.target.value)
    }
    handleSubmit(event){
        event.preventDefault();
        //redirect
        window.location.assign("/reservation");
    }

    render() {
        return (
            <div>
                <main>
                    <form className="form-style-config">
                        <ul>
                            <li>
                                <input type="number" name="childMinAge" className="field-style field-split align-left"
                                       placeholder="Enter Child Min Age" onChange={(e) => this.handlechange(e)}/>
                                <input type="number" name="childMaxAge" className="field-style field-split align-right"
                                       placeholder="Enter Child Max Age" onChange={(e) => this.handlechange(e)} />
                            </li>
                            <li>
                                <input type="number" name="adultMinAge" className="field-style field-split align-left"
                                       placeholder="Enter Adult Min Age" onChange={(e) => this.handlechange(e)}/>
                                <input type="number" name="adultMaxAge" className="field-style field-split align-right"
                                       placeholder="Enter Adult Max Age" onChange={(e) => this.handlechange(e)}/>
                            </li>
                            <li>
                                <input type="number" name="roomsCount" className="field-style field-full align-none"
                                       placeholder="Number of Rooms Available" onChange={(e) => this.handlechange(e)}/>
                            </li>
                            <li>
                                <input type="number" name="paxPerRoom" className="field-style field-full align-none"
                                       placeholder="Enter number pax / room" onChange={(e) => this.handlechange(e)}/>
                            </li>
                            <li>
                                <input type="submit" value="submit configuration" onClick={this.handleSubmit}/>
                            </li>
                        </ul>
                    </form>
                </main>
            </div>

    )
    ;
    }
    }

    export default Config;