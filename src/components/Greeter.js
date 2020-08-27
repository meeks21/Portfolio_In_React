import React from 'react'


function Greeter() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
    } else if (hours >= 17 && hours < 22){
        timeOfDay = "Evening"
    } else {
        timeOfDay = "Night"
    }


    return (
        <div className="greeter_box">
            <h1>Good {timeOfDay}</h1>
            <h2>Hi. I'm Kemar, a web developer, student, and musician. </h2>
            
        </div>
    )
}

export default Greeter