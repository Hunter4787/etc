import React, {Component, createContext, useState} from 'react';

export const hotelContext = createContext();

class HotelContextProvider extends Component {
    render() {
        const [config, setConfig] = useState(["1", "2", "3"]);
        const [reservation, setReservation] = useState([]);
        const [reservations, setReservations] = useState([]);

        //create
        createHotel = () => {
            console.log("hello createHotel");
        }
        //read
        getReservation = () => {
            console.log("hello get reservation")
        }
        //update

        //delete

        return (
            <HotelContext.Provider value={{
                ...this.state,
                createReservation: this.createHotel,
                readReservation: this.getReservation
            }}>
                {this.props.children}
            </HotelContext.Provider>
        );
    }
}

export default HotelContextProvider;