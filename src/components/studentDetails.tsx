import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const StudentDetails = () => {
    const { id } = useParams();

    const [user, setUser] = useState<any>(null); // Use 'any' as the initial type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!user) return <div>No user data available</div>;

    return (
        <>
            <h1>User Details</h1>
            <p>Name: {user?.name}</p>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            <p>Website: {user?.website}</p>
            <p>Company Name: {user?.company?.name}</p>
            <h3>Address</h3>
            <p>Street {user?.address?.street}</p>
            <p>Street {user?.address?.suite}</p>
            <p>Street {user?.address?.city}</p>
            <p>Street {user?.address?.zipcode}</p>
            <Link to="/">
                <button>Back</button>
            </Link>
        </>
    );
};

export default StudentDetails;
