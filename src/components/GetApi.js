import axios from 'axios';
import React, { useState } from 'react';

const GetApi = () => {

    const [userList, setUserList] = useState([]);
    const [userData, setUserData] = useState([]);

    const getUsers =  async () => {

        //     fetch('https://jsonplaceholder.typicode.com/users')
        //    .then(response => response.json())
        //    .then(data => setUserList(data))
        //    .catch(error => console.error('Error:', error));
        //.finally(() => setLoading(false));


        const apiResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserList(apiResponse.data)
    }

    const getUsersList = async () => {
        const response = await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
        setUserData(response.data.data);
    }

    return (
        <div>
            <div className='row'>
              <div className='col-4'>
              <button className='btn btn-success' onClick={getUsers}>Get Users</button>
              <br/>
                <ul>
                    {
                        userList.map((item) => {
                            return (<li>{item.name}</li>)
                        })
                    }
                </ul>
              </div>

              <div className='col-4'>
              <button className='btn btn-success' onClick={getUsersList}>Get Users 2</button>
              <br/>
                <ul>
                    {
                        userData.map((item) => {
                            return (<li>{item.userName}</li>)
                        })
                    }
                </ul>
              </div>
            </div>
        </div>
    );
};

export default GetApi;