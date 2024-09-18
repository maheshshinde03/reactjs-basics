import React from 'react';

const EventBinding = () => {

    const showAlert = () => {
        alert('Welcome event binding');
    }

    const showMessage = (msg) => {
        alert(msg);
    }

    const onCityChange = (event) => {
        alert(`Selected City: ${event.target.value}`);
    }

    const onNameChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <h2>Event Binding</h2>
            <button onClick={showAlert}>Show Alert1</button>
            {/* if we give function name like showAlert(), it'll open on the page load automatically. */}
            <button onClick={() => showAlert()}>Show Alert2</button>
            <button onClick={() => showMessage('Button Clicked')}>Show Btn1</button>

            <select onChange={(event) => onCityChange(event)}>
                <option value="pune">Pune</option>
                <option value="nashik">Nashik</option>
                <option value="mumbai">Mumbai</option>
            </select>
            
            <input type='text' onChange={(event) => onNameChange(event)}/>
        </div>
    );
};

export default EventBinding;