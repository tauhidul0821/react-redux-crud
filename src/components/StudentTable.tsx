import React, {FC, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/usersSlice';
import { RootState } from '../store/store';

function StudentTable() {
    const dispatch = useDispatch();
    // @ts-ignore
    const {user, loading, error } = useSelector<any>((state: RootState) => state.users)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUser());
    }, [dispatch]);


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

    if (loading === 'pending') return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user data available</div>;



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
                {user.map((student: any, index: any) => (
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
