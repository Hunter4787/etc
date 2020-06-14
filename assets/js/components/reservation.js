import React, {Component} from 'react';

class Reservation extends Component {
    render() {
        return (
            <div>
                <main>
                    <form className="form-style-config">
                        <ul>
                            <li>
                                <h4>Please select pax ages</h4>
                                <span>push CTRL bottom for multi-select choice</span>
                            </li>
                            <select name="pax" id="pax" multiple>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="18">18</option>
                                <option value="25">25</option>
                                <option value="35">35</option>
                                <option value="45">45</option>
                                <option value="55">55</option>

                            </select>
                            <li>
                                <input type="submit" value="submit reservation"/>
                            </li>
                            <li>
                                <span id="reservation-infos"></span>
                            </li>
                        </ul>
                    </form>
                </main>
            </div>
        );
    }
}

export default Reservation;