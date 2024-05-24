import React, { useState } from 'react';
import {Link} from "react-router-dom";

function StudentForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: '',
        company: ''
    });

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
                </div>
                <div>
                    <label>Website:</label>
                    <input type="url" name="website" value={formData.website} onChange={handleChange}/>
                </div>
                <div>
                    <label>Company:</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}/>
                </div>

                <Link to="/">
                    <button>Back</button>
                </Link>

                <button type="submit">Add New</button>

            </form>
        </div>
    );
}

export default StudentForm;
