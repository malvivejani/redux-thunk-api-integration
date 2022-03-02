import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addPayrollAPI } from '../redux/actions/PayrollAction';

function AddPayroll() {

    const [payroll, setPayroll]: any = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const payrollData = useSelector((state: any) => state.payroll, shallowEqual);
    const navigation = useNavigate();

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        const body = {
            ...payroll,
            "creditedAt": "2021-12-09",
            "employee": {
                "id": location.state,
            }
        }
        console.log("body", body);
        dispatch(addPayrollAPI(body, onSuccess));
    };

    const onSuccess = () => {
        navigation(-1);
    };

    return (
        <>
            <div>Add Payroll</div>
            {
                console.log("payrollData=====================", payrollData)
            }
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            value={payroll?.amount}
                            onChange={(e: any) => { setPayroll({ ...payroll, 'creditedAmount': e.target.value }) }} />
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

export default AddPayroll