import React from 'react';
import { useState, useEffect } from "react";


const AttenView = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const Id = localStorage.getItem("Student Email");
        const Name = localStorage.getItem("Student First Name");
        const Course = localStorage.getItem("Student Course");
        const Pass = localStorage.getItem("Student Password");

        const newRow = (
            <tr key={Id}>
                <td>{Id}</td>
                <td>{Name}</td>
                <td>{Course}</td>
                <td>{Pass}</td>
            </tr>
        );

        setRows(newRow);
    }, []);
    return (
        <div className='dashHead'>
            <table border={2} style={{
                width: '100%',

            }}>
                <tr style={{
                backgroundColor: '#5C93FA'
                }}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Checked In </th>
                    <th>Checked Out</th>
                </tr>
                <tbody>
                    <tr>
                        <td>15437</td>
                        <td>Muhammad</td>
                        <td>9:00</td>
                        <td>11:00</td>
                    </tr>
                    {rows}
                </tbody>
                <tbody>
                    <tr>
                        <td>15438</td>
                        <td>ALi</td>
                        <td>9:00</td>
                        <td>11:00</td>
                    </tr>
                    {rows}
                </tbody><tbody>
                    <tr>
                        <td>15439</td>
                        <td>Aliyan</td>
                        <td>9:00</td>
                        <td>11:00</td>
                    </tr>
                    {rows}
                </tbody><tbody>
                    <tr>
                        <td>15440</td>
                        <td>Raahim</td>
                        <td>9:00</td>
                        <td>11:00</td>
                    </tr>
                    {rows}
                </tbody><tbody>
                    <tr>
                        <td>15441</td>
                        <td>Haider</td>
                        <td>9:00</td>
                        <td>11:00</td>
                    </tr>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};
export default AttenView;
