import React, { useState, useEffect } from 'react';
import profilePic from "../Assets/profileLogo.png";
import "../App.css";

const DashHead = () => {
    const [rows, setRows] = useState([]);
    const [ids, setIds] = useState([]);
    const [pass, setPass] = useState([]);
    const [name, setName] = useState([]);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const Id = localStorage.getItem("Student Email");
        const Name = localStorage.getItem("Student First Name");
        const Course = localStorage.getItem("Student Course");
        const Pass = localStorage.getItem("Student Password");

        if (Id) {
            const newRow = (
                <tr key={Id}>
                    <td>{Id}</td>
                    <td>{Name}</td>
                    <td>{Course}</td>
                    <td>{Pass}</td>
                </tr>
            );

            setRows((prevRows) => [...prevRows, newRow]);
        }
    }, []);

    const studentData = [
        { id: 15437, name: 'Muhammad', course: 'OOP', password: '1110' },
        { id: 15438, name: 'Ali', course: 'OOP', password: '1111' },
        { id: 15439, name: 'Aliyan', course: 'OOP', password: '1112' },
        { id: 15440, name: 'Raahim', course: 'OOP', password: '1113' },
        { id: 15441, name: 'Haider', course: 'OOP', password: '1114' }
    ];

    useEffect(() => {
        const ids = studentData.map(student => student.id);
        const password = studentData.map(student => student.password)
        const course = studentData.map(student => student.course)
        const usrName = studentData.map(student => student.name)
        
        setIds(ids);
        setPass(password)
        setCourse(course)
        setName(usrName)
    }, []);

    useEffect(() => {
        if (ids.length > 0) {
            localStorage.setItem("Student IDs", JSON.stringify(ids));
            localStorage.setItem("Student Password", JSON.stringify(pass));
            localStorage.setItem("Student course", JSON.stringify(course));
            localStorage.setItem("Student name", JSON.stringify(name));
        }
    }, [ids]);

    return (
        <div className='dashHead'>
            <table border={2} style={{ width: '100%' }}>
                <thead>
                    <tr style={{ backgroundColor: '#5C93FA' }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>{student.password}</td>
                        </tr>
                    ))}
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default DashHead;
