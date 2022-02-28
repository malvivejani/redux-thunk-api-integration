import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmployeeAPI } from '../redux/actions/EmployeeAction';

function AddEmplyee() {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const employee = useSelector((state: any) => state.employee);

    const [data, setData]: any = useState({
        "lastName": "automate",
        "mobile": "9876543210",
        "address": "M0 Test",
        "city": "Ahmedabad",
        "state": "gujarat",
        "country": "india",
        "userRole": "EMPLOYEE",
        "designation": "Trainee",
        "status": "ACTIVE",
        "salary": 7975
    });

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        dispatch(addEmployeeAPI(data, onSuccess, onFailure));
    };

    const onSuccess = () => {
        navigation(-1);
    }

    const onFailure = () => {

    };


    return (
        <>
            <div>AddEmplyee</div>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label>email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e: any) => { setData({ ...data, 'email': e.target.value }) }} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e: any) => { setData({ ...data, 'password': e.target.value }) }} />
                    </div>
                    <div>
                        <label>firstname</label>
                        <input
                            type="text"
                            value={data.firstName}
                            onChange={(e: any) => { setData({ ...data, 'firstName': e.target.value }) }} />
                    </div>
                    <div>
                        <button
                            type="submit"
                        >Add Employee</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEmplyee;