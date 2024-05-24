import React, { FC  } from 'react';
import {Link, Route} from 'react-router-dom';
import StudentDetails from "./studentDetails";

function StudentTable({ students }) {
    function detailsButtonClick(e){
        e.preventDefault();
        console.log('Details Button Click');
    }

    function editButtonClick(e: any){
        e.preventDefault();
        console.log('Edit Button Click');
    }

    function deleteButtonClick(e: any){
        e.preventDefault();
        console.log('Delete Button Click');
    }


    return (
        <>
            <Link to="/form">
                <button>Add New</button>
            </Link>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student: any, index: any) => (
                    <tr key={index}>

                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.username}</td>
                        <td>
                            <Link  to={`/details/${student.id}`}><button style={containerStyle}>&#10050;</button></Link>
                            <button style={containerStyle} onClick={editButtonClick} className="close" type="button">&#x270E;</button>
                            <button style={containerStyle} onClick={deleteButtonClick} className="close" type="button">&#x2715;</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default StudentTable;

const containerStyle = {
    margin: '2px'
};