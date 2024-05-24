import React from 'react';
import './App.css';
import StudentTable from "./components/StudentTable";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';

import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/studentDetails";


function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentTable/>} />
            <Route path="/form" element={<StudentForm />} />
            <Route path="/details/:id" element={<StudentDetails />} />

          </Routes>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
