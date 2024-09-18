import React from 'react';

const MapOperator = () => {

    const cityArray = ["Pune", "Mumbai", "Nashik", "Satara"]

    const studentArray = [
        { name: "John Doe", age: 25, city: "pune" },
        { name: "Jane Doe", age: 30, city: "mumbai" },
        { name: "Tom Doe", age: 28, city: "satara" }
    ]

    return (
        <div>
            <h2>Map Operator</h2>
            <p>In this example, we wil see how render item from array and object on screen.</p>

            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                            cityArray.map((city) => {
                                return (<li>{city}</li>)
                            })
                        }
                    </ul>
                </div>

                <div className='col-3'>
                    <select className='form-select'>
                        {
                            cityArray.map((item) => {
                                return (<option>{item}</option>)
                            })
                        }
                    </select>
                </div>

                <div className='col-3'>
                    <select className='form-select'>
                        {
                            studentArray.map((student, index) => {
                                return (<option value={student.age}>{student.name}</option>)
                            })
                        }
                    </select>
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                    <table className='table table-bordered text-center'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              studentArray.map((stud, index) => {
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{stud.name}</td>
                                    <td>{stud.age}</td>
                                    <td>{stud.city}</td>
                                </tr>)
                              })  
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MapOperator;