import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'antd';
import Logo from "../../Assets/logo.jpeg";
import "../../App.css";

function StdDash() {
    const [crUser, setCrUser] = useState({});
    const [ckTime, setCkTime] = useState('');
    const [coTime, setCoTime] = useState('');
    const [check, setCheck] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            setCrUser(user);
        }
        const storedCkTime = localStorage.getItem('checkInTime');
        if (storedCkTime) {
            setCkTime(storedCkTime);
        }
        const storedCoTime = localStorage.getItem('checkOutTime');
        if (storedCoTime) {
            setCoTime(storedCoTime);
        }
    }, []);

    useEffect(() => {
        if (check) {
            checkOut();
        }
    }, [check]);

    const checkIn = () => {
        const time = new Date();
        const timeString = time.toLocaleTimeString();
        setCkTime(timeString);
        localStorage.setItem('checkInTime', timeString);
        console.log('Checked in time:', timeString);
    };

    const checkOut = () => {
        const time = new Date();
        const timeString = time.toLocaleTimeString();
        setCoTime(timeString);
        localStorage.setItem('checkOutTime', timeString);
        console.log('Checked out time:', timeString);
    };

    const clearChecks = () => {
        let delCheckout = localStorage.setItem('checkOutTime' , '') 
        let delCheckin = localStorage.setItem('checkInTime' , '') 

    }

    return (
        <div>
            <div className="studentDashHead">
                <img
                    src={Logo}
                    alt='logo'
                    style={{ marginTop: '-20px' }}
                />
                <h1>Hello {crUser.username || 'Student'}</h1>
                <NavLink to={"/"}><h4 onClick={clearChecks}>Logout</h4></NavLink>
            </div>

            <div>
                <div>
                    <h4>ID : {crUser.id || 'N/A'}</h4>
                    <h4>COURSE : {crUser.course || 'N/A'}</h4>
                    <h4>CHECKED IN TIME : {ckTime || 'Not checked in yet'}</h4>
                    <h4>CHECKED OUT TIME : {coTime || 'Not checked out yet'}</h4>
                    <Button type="primary" onClick={() => setCheck(true)}>Check In</Button>
                    <Button type="primary" onClick={checkOut}>Check Out</Button>
                </div>
            </div>
        </div>
    );
}

export default StdDash;
