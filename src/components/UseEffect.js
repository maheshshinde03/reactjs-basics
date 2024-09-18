import axios from 'axios';
import React, {useEffect, useState } from 'react';

const UseEffect = () => {

    const[usersList, setUserList] = useState([]);

    const[userName, setUserName] = useState("");

    const[userCity, setUserCity] = useState("");

    useEffect(() => {
       console.log("Use effect without []");
    }); 

    useEffect(() => {
        console.log("Use effect with []");
        getUsers();
    }, []); // [] ensures the effect runs only once when the component mounts
    //useEffect will execute 2 times, once the component load and any state value change
    //  useEffect(() => {
    //     getUsers();
    // })    if we calling without empty array dependency api call happening multiple times, to avoid this use [] empty array dependency
    // with [], api call happen 2 times bcz <React.StrictMode> in index.js, if remove <React.StrictMode> then api call only one time 
    
    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserList(result.data);
    }
     
    const changeNmae = (event) => {
        setUserName(event.target.value);  //first useEffect call on every change of state
    }

    return (
        <div>
            <button className='btn btn-success' onClick={getUsers}>Get Users</button>  {/* on page load we can't get user list by default for that we are using useEffect to get data automatically, we don't need this button that time*/}
            <div className='row'>
              <div className='col-4'>
                <ul>
                    {
                        usersList.map((item) => {
                            return(<li>{item.name}</li>)
                        })
                    }
                </ul>
              </div>

              <div className='col-4'>
                <input type='text' onChange={(event)=>changeNmae(event)}/>
              </div>
            </div>
        </div>
    );
};

export default UseEffect;