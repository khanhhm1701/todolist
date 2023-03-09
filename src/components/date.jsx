import React from "react"
import "../date/date.css"

export default function ToDay() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return (
        <div className="today">Today: {day}/{month}/{year}</div>
    )
}

