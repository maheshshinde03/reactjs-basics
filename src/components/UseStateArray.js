import React, { useState } from 'react';

const UseStateArray = () => {

    const [cityList, setCityList] = useState(['Pune', 'Nagpur'])

    const [cityName, setCityName] = useState('');

    const changeCity = (event) => {
        setCityName(event.target.value)
    }

     const addCity = () => {
        setCityList(oldList => [...oldList, cityName])
     }
    return (
        <div>
            <h2>Use State Array</h2>
            <br></br>
            <p>{cityList}</p>
             <div className='row'>
            <div className='col-3'>
                <input type='text' className='form-control'
                onChange={(event) => changeCity(event)}/>
            </div>

            <div className='col-3'>
                <input type='butt on' className='btn btn-success' value="Add city"
                onClick={addCity}/>
            </div>
        </div>
        </div>
       
    );
};

export default UseStateArray;