import React from 'react'
import Footer from '../components/Footer'
import Course from '../components/Course'
import Navbar from '../components/Navbar'
import list from '../../public/list.json'

function Courses() {
    console.log(list);
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>  <Course/></div>
    <Footer/>
    </>
  )
}

export default Courses