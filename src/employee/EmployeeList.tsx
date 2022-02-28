import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchEmployeeList } from '../redux/actions/EmployeeAction';
import './style.css';

function EmployeeList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employeeData = useSelector((state: any) => state.employee);

    useEffect(() => {
        dispatch(fetchEmployeeList());
    }, []);

    const addEmployeeHandler = () => {
        navigate('/add-employee')
    };

    return (
        <>
            <div style={{ paddingLeft: 250 }}>
                <div>EmployeeList</div>
                <button style={{ marginLeft: 10 }} onClick={addEmployeeHandler}>Add Employee</button>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>salary</th>
                        <th>Actions</th>
                    </tr>
                    {
                        employeeData.employee?.data && employeeData.employee?.data?.length > 0 && employeeData.employee?.data?.map((item: any, index: number) => {
                            return (
                                <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.firstName}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.mobile}</td>
                                    <td>{item?.salary}</td>
                                    <td>
                                        <button onClick={() => navigate('/edit-employee', { state: item })}>Edit Emp</button>
                                        <button style={{ marginLeft: 10 }}>Add Payroll</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default EmployeeList;