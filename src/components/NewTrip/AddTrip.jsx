import React from 'react'
import "./AddTrip.css"

export default function AddTrip(props) {
    // This function is all about asking user for adding new trip details like
    // Place Name, Date, and Type of trip and will add the trip into state of app.js
    // using newTrip()
    return (
        <div className="new-trip">
            <h1>Add a Trip</h1>
            <form onSubmit={props.addTrip} action="/" >
                <div>
                    <p>Date</p>
                    <input type="date" name="date" placeholder="dd-mm-yyyy" />
                    <p>Place</p>
                    <input type="text" name="place" placeholder="Place Name" />
                    <p>Type</p>
                    <select name="type">
                        <option value="select">Select Trip Type</option>
                        <option value="Trek">Trek</option>
                        <option value="Club">Club</option>
                        <option value="Tropical">Tropical</option>
                    </select>
                </div>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}
