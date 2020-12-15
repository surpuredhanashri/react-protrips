import React from 'react'

export default function Trip(props) {
    // returns row of each table comprising trip detail
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.place}</td>
            <td>{props.type}</td>
        </tr>
    )
}
