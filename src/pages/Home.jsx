import React from 'react'
import Header from '../components/header/Header'
import Courses from '../components/main/Courses'
import Achievement from '../components/main/Achievement'
import Student from '../components/main/Student'

const Home = () => {
  return (
    <div>
        <Header/>
        <Courses/>
        <Achievement/>
        <Student/>
    </div>
  )
}

export default Home