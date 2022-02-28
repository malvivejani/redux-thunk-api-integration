import React from 'react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import './style.css';

function Layout() {
    const accessToken = localStorage.getItem('accessToken');

    return (
        accessToken ?
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/about">About</Link>
                            <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>
                        </div>
                    </div>
                </nav>
                <div className="sidebar">
                    <NavLink to="/">Employee</NavLink>
                    <NavLink to="/appraisal">Appraisals</NavLink>
                    <NavLink to="/payroll">Payroll</NavLink>
                </div>
                <div style={{ padding: 100 }}>
                    <Outlet />
                </div>
            </> : <Navigate to="/login" />
    )
}

export default Layout;