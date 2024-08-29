
import './App.css';
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar   from './Navbar';
import Ddeposit from './components/ddeposit.jsx'
import Hpipeline from './components/hpipeline.jsx'
import JobSetup from './components/jobSetup.jsx'
import MaReview from './components/maReview.jsx'
import Ojt from './components/ojt.jsx'
import Perkspot from './components/perkspot.jsx'
import Rfdo from './components/rfdo.jsx'
import SaReview from './components/saReview.jsx'
import Taxform from './components/taxform.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="taxform" element={<Taxform />} />
          <Route path="ddeposit" element={<Ddeposit />} />
          <Route path="pipeline" element={<Hpipeline />} />
          <Route path="mareview" element={<MaReview/>} />
          <Route path="ojt" element={<Ojt/>} />
          <Route path="perkspot" element={<Perkspot/>} />
          <Route path="rfdo" element={<Rfdo/>} />
          <Route path="sareview" element={<SaReview/>} />
          <Route path="jobSetup" element={<JobSetup/>} />
           
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
