import React, { useState } from 'react';

function SingleStudent(student) {
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
        <div>

            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.username}</td>
            <td>
                <button style={containerStyle} onClick={detailsButtonClick} className="close"
                        type="button">&#10050;</button>
                <button style={containerStyle} onClick={editButtonClick} className="close"
                        type="button">&#x270E;</button>
                <button style={containerStyle} onClick={deleteButtonClick} className="close"
                        type="button">&#x2715;</button>
            </td>
        </div>
    );
}

export default SingleStudent;

const containerStyle = {
    margin: '2px'
};