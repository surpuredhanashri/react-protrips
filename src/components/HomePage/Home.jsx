import React from 'react'
import "./Home.css"
import mountain from "./mountain.png"


export default function Home(props) {

    // number of trips planned by user of each type
    let { tropical, trek, club } = calculateTrips(props.trips)

    return (
        <div className="home" >
            {/* Will display otal number of trips pllaned by user */}
            <p><span>{tropical + trek + club}</span> <span id="trips-span">trips</span></p>
            <div className="trips-distribution">
                {/* Will Display total number of tropic trips out of total trips */}
                <p><span>{tropical}</span> <i className="fa fa-sun-o" aria-hidden="true"></i></p>
                {/* Will Display total number of trek trips out of total trips */}
                <p><span>{trek}</span> <img src={mountain} alt="" /></p>
                {/* Will Display total number of club trips out of total trips */}
                <p><span>{club}</span> <i className="fa fa-beer" aria-hidden="true"></i></p>
            </div>
        </div>
    )
}


function calculateTrips(trips) {
    // function will take array of object where each object has detail of every trip
    // and will calculate the number of trips for each of the below types
    let tropical = 0
    let trek = 0
    let club = 0

    trips.forEach(trip => {
        if (trip.type === "Tropic")
            tropical++
        else if (trip.type === "Trek")
            trek++
        else if (trip.type === "Club")
            club++
    })


    return { tropical: tropical, trek: trek, club: club }
}
