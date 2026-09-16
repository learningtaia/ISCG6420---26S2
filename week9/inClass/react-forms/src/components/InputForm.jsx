import { useState } from "react";

function InputForm({ submitForm }) {
    const [ name, setName ] = useState(" ");
    const [ date, setDate ] = useState(" ");
    const [ time, setTime ] = useState(" ");

    function handleSubmit(e) {
        e.preventDefault();

        // check all fields are valid
        if (!name || !date | !time) {
            return;
        }

        // create object with values
        let booking = {};
        booking.name = name;
        booking.date = date;
        booking.time = time;

        // pass object to submitForm function
        submitForm({booking});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default InputForm;