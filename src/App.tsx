import React, { useState, useEffect } from 'react';
import './App.css';
import StudentTable from "./components/StudentTable";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/studentDetails";


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
          throw new Error('Nework response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log('Result :- ', result);
      }catch (error){
        console.log('Error :- ', error);
        // @ts-ignore
        setError(error);
      }finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const studentList = [
    {
      name: 'Tauhidul Islam',
      email: 'tuhin@gmail.com',
      userName: 'tauhidul',
      website: 'tuhin.com',
      company: 'BS23'
    },
    {
      name: 'Islam',
      email: 'tuh3in@gmail.com',
      userName: 't3auhidul',
      website: 'tuh3in.com',
      company: 'BS233'
    }
  ]

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable students={data} />} />
          <Route path="/form" element={<StudentForm />} />
          <Route path="/details/:id" element={<StudentDetails />} />

        </Routes>
      </BrowserRouter>

      {/*<Student />*/}
      {/*<StudentList />*/}
      {/*<StudentTable students={studentList} />*/}


    </div>
  );
}

export default App;
