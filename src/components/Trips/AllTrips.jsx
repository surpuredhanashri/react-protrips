import React from 'react'
import Trip from './Trip'
import "./AllTrips.css"

export default class AllTrips extends React.Component {

    /* state = {
        trips: [{place: string, date: dateString, type:string} ],
        type : tropic/club/trek
    }*/

    constructor(props) {
        super(props)
        this.state = {
            trips: props.trips,
            type: ""
        }
    }

    changeType = (type) => {
        // when user chooses any particular type of trip from filter section
        // then that value is stored in state.type so that is can be used to filter
        // specific type of trip
        this.setState({ type: type })
    }

    render() {

        // variable for storing place based on type
        let tripsArray = []

        // filter place from trips based on users choice if state.type is empty string
        //  then it considers whole list
        if (this.state.type)
            tripsArray = this.state.trips.filter(trip => trip.type === this.state.type)
                .map((trip, index) => <Trip key={index} {...trip} />)
        else
            tripsArray = this.state.trips.map((trip, index) => <Trip key={index} {...trip} />)


        return (
            <div className="all-trips">
                <h1>All Trips</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Place</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tripsArray}
                    </tbody>
                </table>

                <div className="filter">
                    <p>Filter : </p>
                    <p onClick={() => this.changeType("")}>All</p>
                    <hr />
                    <p onClick={() => this.changeType("Trek")}>Trek</p>
                    <hr />
                    <p onClick={() => this.changeType("Club")}>Club</p>
                    <hr />
                    <p onClick={() => this.changeType("Tropic")}>Tropic</p>
                </div>
            </div>
        )
    }

}
