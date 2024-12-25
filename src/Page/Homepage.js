import React from 'react'
import Dashboard from '../component/Dashboard/Dashboard';
import MyCertification from '../component/Certification/MyCertification';
import MyProjects from '../component/Projects/MyProjects';
import MySkills from '../component/Skills/MySkills';
import Contact from '../component/Contact/Contact';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import './Homepage.css';

const Homepage = () => {
  return (
   <div className="body">
    <Header/>
    <Dashboard/>
    <MyCertification/>
    <MyProjects/>
    <MySkills/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Homepage