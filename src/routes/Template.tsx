import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Appraisal from '../appraisal/Appraisal';
import AddEmplyee from '../employee/AddEmplyee';
import EditEmployee from '../employee/EditEmployee';
import EmployeeList from '../employee/EmployeeList';
import Layout from '../layout/Layout';
import Login from '../login/Login';
import Notfound from '../notfound/Notfound';

function Template() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeList />} />
          <Route path='/edit-employee' element={<EditEmployee />} />
          <Route path='/add-employee' element={<AddEmplyee />} />
          <Route path="/appraisal" element={<Appraisal />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Template;