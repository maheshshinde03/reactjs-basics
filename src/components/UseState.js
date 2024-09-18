import React, { useState } from 'react';

const UseState = () => {

    let courseName = "Angular";
    // we can change this courseName but won't reflect on UI, for that we use useState
   
    //courseDuration => state name and setCourseName => method name which we going to use change course name
    const [courseDuration, setCourseName] = useState("2 Months");   // 2 Months => initial value
    
    //premitive data type
    const [rollNo, setRollNo] = useState(123);
    const [state, setState] = useState("MH");
    const [isActive, setIsActive] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    //non-primitive data type
    const [student, setStudent] = useState({name:'abc',
      age: 23,
      city: 'pune'
    });

    const [cityList, setCityList] = useState(['pune', 'mumbai', 'delhi']);
     
    const changeName = () => {
        courseName = "React";
    }

    const changeDuration = () => {
        setCourseName("4 Months");  // 4 Months => new value
    }

    const changeRollNo = (event) => {
        setRollNo(event.target.value)
    }

    const changeState = (event) => {
        setState(event.target.value)
    }
    
    const onActiveChange = (event) => {
        setIsActive(event.target.checked);
    }

    return (
        <div>
            <h2>Use State</h2>
            <br></br>
            <div className='row'>
                <div className='col-3'>
                    <p>{courseName}</p>
                </div>

                <div className='col-3'>
                    <p>{courseDuration}</p>
                </div>

                <div className='col-3'>
                    <p>{rollNo}</p>
                </div>

                <div className='col-3'>
                    <p>{state}</p>
                    <p>{isActive ? 'Active' : 'De-Active'}</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={changeName}>Change Course Name</button>
                    <span>it won't change</span>
                </div>

                <div className='col-3'>
                    <button className='btn btn-primary' onClick={changeDuration}>Change Course Duration</button>
                    <span>it will change</span>
                </div>

                <div className='col-3'>
                    <input type='text' onChange={(event) => changeRollNo(event)}/>
                </div>

                <div className='col-3'>
                    <select onChange={(event)=> changeState(event)}>
                        <option>Goa</option>
                        <option>MH</option>
                        <option>UP</option>
                        <option>Delhi</option>
                    </select>
                    <input type='checkbox' onChange={(event) => onActiveChange(event)}/>
                </div>
            </div>
        </div>
    );
};

export default UseState;