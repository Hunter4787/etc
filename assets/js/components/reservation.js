import React, {Component} from 'react';
import axios from "axios";

class Reservation extends Component {
    constructor() {
        super();
        this.state = {
            ageList: ''
        }
    }

    handleChange(e) {
        localStorage.setItem('ages', e.target.value);
        this.setState({"ageList": e.target.value});
    }

    handleSubmit(e, agesArray, paxPerRoom) {
        e.preventDefault();
        let result = [];
        console.log(agesArray.length)
        console.log(paxPerRoom)

        console.log(agesArray.length % paxPerRoom)
        console.log((agesArray.length / paxPerRoom))

        if ((agesArray.length % paxPerRoom) == 0) {
            console.log(`nombre de chambre == ${agesArray.length / paxPerRoom}`);

            //init empty reservation
            let res = {adults: 0, childs: 0, room: 0};

            //------test number of adults in reservation array----
            let totalRoomsNumb = agesArray.length / paxPerRoom;
            let totalAdultsNumb = 0;
            for (let x = 0; x < agesArray.length; x++) {
                if (agesArray[x] >= parseInt(localStorage.getItem('adultMinAge'))) {
                    totalAdultsNumb = totalAdultsNumb + 1;
                }
            }
            //test values
            console.log('adults: ' + totalAdultsNumb);
            console.log('rooms ' + totalRoomsNumb);

            //------/ test number of adults in reservation array----

            //------test if rooms number === adults number or not
            if (totalRoomsNumb === totalAdultsNumb) {
                console.log('rooms ' + totalRoomsNumb);
                console.log('adults: ' + totalAdultsNumb);

                //fill all rooms loop
                for (let k = 1; k <= parseInt(agesArray.length / paxPerRoom); k++) {
                    //-----fill on 1 room------

                    //------get 1 adult for the room-----
                    for (let i = 0; i < agesArray.length; i++) {
                        if (agesArray[i] >= parseInt(localStorage.getItem('adultMinAge'))) {
                            res.adults = res.adults + 1;
                            agesArray[i] = -1;
                            break;
                        } else console.log('you can\'t reserve for childrens only !')
                    }
                    //------/ get 1 adult for the room-----

                    //complete room fill
                    res.room = k;
                    let j = 0;
                    console.log((res.childs + res.adults))
                    while ((res.childs + res.adults) < paxPerRoom) {
                        if (agesArray[j] <= parseInt(localStorage.getItem('childMaxAge')) && (agesArray[j] != -1)) {
                            res.childs = res.childs + 1;
                            agesArray[j] = -1;
                        }
                        j++;
                    }
                    result = [...result, res];
                    console.log(result);

                    res = {adults: 0, childs: 0, room: 0}
                }
                //--------method to insert reservation in database------
                for(let i = 0; i < result.length; i++){
                    axios.post('/api/reservations/create', result[i]).then(response =>{response.data})
                        .catch(error => {console.error(error)})
                }
                //--------/ method to insert reservation in database------
            } else if (totalRoomsNumb > totalAdultsNumb) {

                alert('you can not get a room for childs only');

            } else if (totalRoomsNumb < totalAdultsNumb) {
                //fill all rooms loop
                for (let k = 1; k <= parseInt(agesArray.length / paxPerRoom); k++) {
                    //-----fill on 1 room------

                    //------get 1 adult for the room-----
                    for (let i = 0; i < agesArray.length; i++) {
                        if (agesArray[i] >= parseInt(localStorage.getItem('adultMinAge'))) {
                            res.adults = res.adults + 1;
                            agesArray[i] = -1;
                            break;
                        } else console.log('you can\'t reserve for childrens only !')
                    }
                    //------/ get 1 adult for the room-----

                    //complete room fill
                    res.room = k;
                    let j = 0;
                    console.log((res.childs + res.adults))
                    while ((res.childs + res.adults) < paxPerRoom) {
                        if (agesArray[j] <= parseInt(localStorage.getItem('childMaxAge')) && (agesArray[j] != -1)) {
                            res.childs = res.childs + 1;
                            agesArray[j] = -1;
                        }
                        if (agesArray[j] >= parseInt(localStorage.getItem('adultMinAge')) && (agesArray[j] != -1)) {
                            res.adults = res.adults + 1;
                            agesArray[j] = -1;
                        }
                        j++;
                    }
                    result = [...result, res];
                    console.log(result);
                    res = {adults: 0, childs: 0, room: 0}
                }
                //--------method to insert reservation in database------
                for(let i = 0; i < result.length; i++){
                    axios.post('/api/reservations/create', result[i]).then(response =>{response.data})
                        .catch(error => {console.error(error)})
                }
                //--------/ method to insert reservation in database------
            }
        }else if ( ((agesArray.length % paxPerRoom) != 0) ){
            console.log(`nombre de chambre == ${agesArray.length / paxPerRoom}`);

            //init empty reservation
            let res = {adults: 0, childs: 0, room: 0};

            //------test number of adults in reservation array----
            let totalRoomsNumb = agesArray.length / paxPerRoom;
            let totalAdultsNumb = 0;
            for (let x = 0; x < agesArray.length; x++) {
                if (agesArray[x] >= parseInt(localStorage.getItem('adultMinAge'))) {
                    totalAdultsNumb = totalAdultsNumb + 1;
                }
            }
            //test values
            console.log('adults: ' + totalAdultsNumb);
            console.log('rooms ' + totalRoomsNumb);

            //------/ test number of adults in reservation array----

            //------test if rooms number === adults number or not
            if (totalRoomsNumb === totalAdultsNumb) {
                console.log('rooms ' + totalRoomsNumb);
                console.log('adults: ' + totalAdultsNumb);

                //fill all rooms loop
                for (let k = 1; k <= parseInt(agesArray.length / paxPerRoom) + 1; k++) {
                    //-----fill on 1 room------

                    //------get 1 adult for the room-----
                    for (let i = 0; i < agesArray.length; i++) {
                        if (agesArray[i] >= parseInt(localStorage.getItem('adultMinAge'))) {
                            res.adults = res.adults + 1;
                            agesArray[i] = -1;
                            break;
                        } else console.log('you can\'t reserve for childrens only !')
                    }
                    //------/ get 1 adult for the room-----

                    //complete room fill
                    res.room = k;
                    let j = 0;
                    console.log((res.childs + res.adults))
                    while ((res.childs + res.adults) < paxPerRoom) {
                        if (agesArray[j] <= parseInt(localStorage.getItem('childMaxAge')) && (agesArray[j] != -1)) {
                            res.childs = res.childs + 1;
                            agesArray[j] = -1;
                        }
                        j++;
                    }
                    result = [...result, res];
                    console.log(result);

                    res = {adults: 0, childs: 0, room: 0}
                }
                //--------method to insert reservation in database------
                for(let i = 0; i < result.length; i++){
                    axios.post('/api/reservations/create', result[i]).then(response =>{response.data})
                        .catch(error => {console.error(error)})
                }
                //--------/ method to insert reservation in database------
            } else if (totalRoomsNumb > totalAdultsNumb) {

                alert('you can not get a room for childs only');

            } else if (totalRoomsNumb < totalAdultsNumb) {
                //fill all rooms loop
                for (let k = 1; k <= parseInt(agesArray.length / paxPerRoom) + 1; k++) {
                    //-----fill on 1 room------

                    //------get 1 adult for the room-----
                    for (let i = 0; i < agesArray.length; i++) {
                        if (agesArray[i] >= parseInt(localStorage.getItem('adultMinAge'))) {
                            res.adults = res.adults + 1;
                            agesArray[i] = -1;
                            break;
                        } else console.log('you can\'t reserve for childrens only !')
                    }
                    //------/ get 1 adult for the room-----

                    //complete room fill
                    res.room = k;
                    let j = 0;
                    console.log((res.childs + res.adults))
                    while ((res.childs + res.adults) < paxPerRoom) {
                        if (agesArray[j] <= parseInt(localStorage.getItem('childMaxAge')) && (agesArray[j] != -1)) {
                            res.childs = res.childs + 1;
                            agesArray[j] = -1;
                        }
                        if (agesArray[j] >= parseInt(localStorage.getItem('adultMinAge')) && (agesArray[j] != -1)) {
                            res.adults = res.adults + 1;
                            agesArray[j] = -1;
                        }
                        j++;
                    }
                    result = [...result, res];
                    console.log(result);
                    res = {adults: 0, childs: 0, room: 0}
                }
                //--------method to insert reservation in database------
                for(let i = 0; i < result.length; i++){
                    axios.post('/api/reservations/create', result[i]).then(response =>{response.data})
                        .catch(error => {console.error(error)})
                }
                //--------/ method to insert reservation in database------
            }
    }
    }

    render() {
        return (
            <div>
                <main>
                    <form className="form-style-config">
                        <ul>
                            <li>
                                <h4>Please Enter pax ages</h4>
                            </li>
                            <li>
                                <input type={"text"} name={"paxAges"} onChange={(e) => this.handleChange(e)}/>
                            </li>
                            <li>
                                <input type="submit" value="submit reservation"
                                       onClick={(e, array) => this.handleSubmit(e, localStorage.getItem('ages').split(";"), parseInt(localStorage.getItem('paxPerRoom')))}/>
                            </li>
                            <li>
                                <span
                                    id="reservation-infos">childs : [{localStorage.getItem('childMinAge')},{localStorage.getItem('childMaxAge')}]</span>
                                <br/>
                                <span
                                    id="reservation-infos">adults : [{localStorage.getItem('adultMinAge')},{localStorage.getItem('adultMaxAge')}]</span>
                                <br/>
                                <span
                                    id="reservation-infos">Pax / Room : {localStorage.getItem('paxPerRoom')}</span><br/>

                            </li>
                        </ul>
                    </form>
                </main>
            </div>
        );
    }
}

export default Reservation;