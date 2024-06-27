import React from 'react'
import Header from '../components/header/Header'
import Courses from '../components/main/Courses'
import Achievement from '../components/main/Achievement'

const Home = () => {
  return (
    <div>
        <Header/>
        <Courses/>
        <Achievement/>
    </div>
  )
}

export default Home