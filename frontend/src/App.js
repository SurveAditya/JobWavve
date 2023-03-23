import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Images } from "./pages/Images";
import { Upload } from "./pages/Upload";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictaphone from "./pages/Dictaphone";
import { Finger } from "./pages/Finger";
import Blog from "./pages/Blog";
import { Jobs } from "./pages/Jobs";
// import { JobData } from "./pages/jon-data/:id";
import { Resume } from "./pages/Resume";
import Training from "./pages/Training";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Report from "./pages/Report";
import { Register } from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import JobDetails from "./pages/JobDetail";
import Jobdata from "./pages/Jobdata";
import EmpDetail from "./pages/EmpDetail";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {
          window?.location?.pathname !== "/admin/dashboard" ? <Navbar /> : null
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/dict" element={<Dictaphone />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/images" element={<Images />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/finger" element={<Finger />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-data/:id" element={<Jobdata />} />
          <Route path="/job-detail/:id" element={<JobDetails />} />
          <Route path="/employee-detail/:id" element={<EmpDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/training" element={<Training />} />
          <Route path="/report" element={<Report />} />
        </Routes>
        {
          window?.location?.pathname !== "/admin/dashboard" ? <Footer /> : null
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
