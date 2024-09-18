import axios from 'axios';
import React, { useState } from 'react';

const PutDeleteApi = () => {

    const [userList, setUserList] = useState([]);
    const [userObj, setUserObj] = useState({
        "userId": 0,
        "userName": "",
        "emailId": "",
        "fullName": "",
        "role": "",
        "createdDate": new Date(),
        "password": "",
        "projectName": "",
        "refreshToken": "",
        "refreshTokenExpiryTime": new Date
    });

    const addFormValue = (event, key) => {
        setUserObj((oldObj) => ({ ...oldObj, [key]: event.target.value }));
    }

    const getUsers = async () => {
        const res = await axios.get('https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers');
        setUserList(res.data.data);
    }

    const onSaveUser = async () => {
        const res = await axios.post('https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser', userObj);
        if (res.data.result) {
            alert('User added successfully');
            getUsers();
        } else {
            alert(res.data.message);
        }
    }

    const onUpateUser = async () => {
        const res = await axios.post('https://projectapi.gerasim.in/api/BudgetPlanner/UpdateUser', userObj);
        if (res.data.result) {
            alert('User updated successfully');
            getUsers();
        } else {
            alert(res.data.message);
        }
    }

    const onEdit = (data) => {
        setUserObj(data);
    }

    const onDeleteUser = async (id) => {
        const isDelete = window.confirm("Are you sure want to delete");
        if (isDelete){
            const res = await axios.delete("https://projectapi.gerasim.in/api/BudgetPlanner/DeleteUserByUserId?userId="+id);
            if (res.data.result) {
                alert('User deleted successfully');
                getUsers();
            } else {
                alert(res.data.message);
            }
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>

                        <div className='card-header bg-success'>
                            <div className='row'>
                                <div className='col-6'>User List</div>
                                <div className='col-6 text-end'>
                                    <button className='btn btn-primary' onClick={getUsers}>Load Data</button>
                                </div>
                            </div>
                        </div>

                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Full Name</th>
                                        <th>Project Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userList.map((item, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.emailId}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.projectName}</td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={()=>onEdit(item)}>Edit</button>
                                                    <button className='btn btn-danger mx-2'  onClick={()=>onDeleteUser(item.userId)}>Delete</button>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>New user</div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>User Name</label>
                                    <input type='text' value={userObj.userName}  onChange={(event) => addFormValue(event, 'userName')} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label>Email Id</label>
                                    <input type='text' value={userObj.emailId} onChange={(event) => addFormValue(event, 'emailId')} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label>Full Name</label>
                                    <input type='text' value={userObj.fullName} onChange={(event) => addFormValue(event, 'fullName')} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label>Role</label>
                                    <input type='text' value={userObj.role} onChange={(event) => addFormValue(event, 'role')} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label>Password</label>
                                    <input type='text' value={userObj.password} onChange={(event) => addFormValue(event, 'password')} className='form-control' />
                                </div>

                                <div className='col-6'>
                                    <label>Project Name</label>
                                    <input type='text' value={userObj.projectName} onChange={(event) => addFormValue(event, 'projectName')} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    {
                                        userObj.userId == 0 &&  <button className='btn btn-success mt-2' onClick={onSaveUser}>Add User</button>
                                    }
                                     {
                                        userObj.userId !== 0 &&  <button className='btn btn-warning mt-2' onClick={onUpateUser}>Update User</button>
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PutDeleteApi;