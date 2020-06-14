import React, {Component, useContext} from 'react';

class Config extends Component {
    render() {

        return (
            <div>
                {this.props.config.map(cnf => cnf)}
                <main>
                    <form className="form-style-config">
                        <ul>
                            <li>
                                <input type="number" name="childMinAge" className="field-style field-split align-left"
                                placeholder="Enter Child Min Age"/>
                                <input type="number" name="childMaxAge" className="field-style field-split align-right"
                                placeholder="Enter Child Max Age"/>
                            </li>
                            <li>
                                <input type="number" name="adultMinAge" className="field-style field-split align-left"
                                       placeholder="Enter Adult Min Age"/>
                                <input type="number" name="AdultMaxAge" className="field-style field-split align-right"
                                       placeholder="Enter Adult Max Age"/>
                            </li>
                            <li>
                                <input type="number" name="roomsCount" className="field-style field-full align-none"
                                       placeholder="Number of Rooms Available"/>
                            </li>
                            <li>
                                <input type="number" name="paxPerRoom" className="field-style field-full align-none"
                                       placeholder="Enter number pax / room"/>
                            </li>
                            <li>
                                <input type="submit" value="submit configuration"/>
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