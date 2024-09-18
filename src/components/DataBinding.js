import React from 'react';

const DataBinding = () => {
    const tutorialName = "Reactjs Tutorial";
    const rollNo = 121;
    const isActive = false;
    const currentDate = new Date();
     
    const student = {
        name: "John Doe",
        age: 25,
        city: 'Pune'
    }

    const cityList = ['Pune', 'Nashik', 'Mumbai'];

    return (
        <div>
            <h2>Data Binding</h2>
            <table>
                <tr>
                    <th>Tutorial Name</th>
                    <td>{tutorialName}</td>
                    <th>Roll No.</th>
                    <td>{rollNo}</td>
                    <th>Is Active?</th>
                    <td>{isActive? 'Yes' : 'No'}</td>
                    <th>Current Date</th>
                    <td>{currentDate.toLocaleString()}</td>
                    {/*  you can't print data variable value directlly. you need to convert into string. */}
                </tr>

                <tr>  
                    <th>Student Name</th>  {/*you can't print object directly */}
                    <td>{student.name}</td>
                    <th>Age</th>
                    <td>{student.age}</td>
                    <th>City</th>
                    <td>{student.city}</td>
                </tr>
                <tr>  {/*you can print array directly but it'll print properly */}
                    <th>City List</th>
                    <td>{cityList.toString()}</td>
                </tr>
            </table>
            <input type='text' value={tutorialName}/>
        </div>
    );
};

export default DataBinding;