import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            {/* Home Button */}
            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
            {/* Add new trip button */}
            <Link to="/addTrip"><i className="fa fa-calendar-plus-o" aria-hidden="true"></i></Link>
            {/* View all trips button */}
            <Link to="/allTrips"><i className="fa fa-table" aria-hidden="true"></i></Link>
        </div>
    )
}
