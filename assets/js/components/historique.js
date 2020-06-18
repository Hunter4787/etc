import React, {Component} from 'react';
import axios from 'axios';

class Historique extends Component {
    constructor() {
        super();
        this.state = {reservations: [], loading: true};
    }

    componentDidMount() {
        this.getReservations();
    }

    getReservations() {
        axios.get(`api/reservations/read`).then(response => {
            this.setState({reservations : response.data, loading : false});
        }).catch(error => console.error(error));
    }

    render() {
        const loading = this.state.loading;
        return (
            <div id='historique-container'>
                <main>
                    <form className="form-style-config historique-form">
                        <h1>Reservation Historique</h1>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <ul>
                                {this.state.reservations.map((reservation, index) =>
                                    <li key={index}>
                                        <p><strong>Room N°{reservation.room}</strong> : {reservation.adults} adults
                                            + {reservation.childs} childs</p>
                                    </li>
                                )}
                            </ul>)
                        }
                    </form>
                </main>
            </div>
        );
    }
}

export default Historique;