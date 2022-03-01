import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editEmployeeAPI } from '../redux/actions/EmployeeAction';

function EditEmployee() {

    const data: any = useLocation().state;
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const employee = useSelector((state: any) => state.employee);

    const [editEmployeeAPIData, seteditEmployeeAPIData] = useState({
        "email": data.email,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "mobile": data.mobile,
        "address": data.address,
        "city": data.city,
        "state": data.state,
        "country": data.country,
        "userRole": data.userRole,
        "designation": "Trainee",
        "status": "INACTIVE",
        "salary": 8000
    });

    const editEmployeeHandler = (e: any) => {
        e.preventDefault();
        dispatch(editEmployeeAPI(data.id, editEmployeeAPIData, onSucecss, onFailure));
    };

    const onSucecss = () => {
        navigation(-1);
    };

    const onFailure = () => {

    }

    return (
        <div>
            <div>EditEmployee</div>
            <div>
                <form onSubmit={editEmployeeHandler}>
                    <div>
                        <label>First name</label>
                        <input
                            type="text"
                            value={editEmployeeAPIData.firstName}
                            onChange={(e: any) => { seteditEmployeeAPIData({ ...editEmployeeAPIData, 'firstName': e.target.value }) }} />
                    </div>
                    <div>
                        <label>Mobile</label>
                        <input
                            type="number"
                            value={editEmployeeAPIData.mobile}
                            onChange={(e: any) => { seteditEmployeeAPIData({ ...editEmployeeAPIData, 'mobile': e.target.value }) }} />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input
                            type="number"
                            value={editEmployeeAPIData.salary}
                            onChange={(e: any) => { seteditEmployeeAPIData({ ...editEmployeeAPIData, 'salary': parseInt(e.target.value) }) }} />
                    </div>
                    <div>
                        <button
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;