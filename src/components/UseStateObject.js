import React, { useState } from 'react';

const UseStateObject = () => {
   
    const [studentObj, setStudentObj] = useState({
        name: 'Mahesh',
        age: 25,
        city: 'Pune'
    })

    const changeName = (event) =>{
        setStudentObj({...studentObj, name: event.target.value})
    }

    const changeAge = (event) =>{
        setStudentObj(oldObj => ({...oldObj, age: event.target.value}))
    }

    const changeCity = (event) =>{
        setStudentObj({...studentObj, city: event.target.value})
    }


    return (
        <div className='container'>
            <p>{JSON.stringify(studentObj)}</p>
            <div className='row'>
                <div className='col-4'>
                  <label>Name</label>
                  <input type='text' className='form-control'
                  onChange={(event) => changeName(event)}/>
                </div>

                <div className='col-4'>
                  <label>Age</label>
                  <input type='text' className='form-control'
                  onChange={(event) => changeAge(event)}/>
                </div>

                <div className='col-4'>
                  <label>City</label>
                  <input type='text' className='form-control' onChange={(event) => changeCity(event)}/>
                </div>
            </div>
        </div>
    );
};

export default UseStateObject;