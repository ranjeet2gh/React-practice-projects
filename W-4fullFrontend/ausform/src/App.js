import React from 'react'
import './App.css';
import InputFieldWithLabel from './components/form-components/labeledInput';
import Navbar from './components/NavBar/Navbar';
import FormLayout from './components/w4form/FormLayout';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="container fluid px-0">
      <div style={{ zIndex: "10", height: `${window.innerHeight}`, boxShadow:"0 1rem 3rem rgba(#67a9e5, .175)" }} className='sidebar bg-light d-none d-lg-block'>
        <Sidebar />
      </div>
      <div style={{width: `${window.innerHeight}`}} className='main-content'>
        <Navbar />
        <FormLayout />
      </div>
    </div>
  );
}

export default App;
