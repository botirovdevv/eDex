import React, { useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import img1 from '../../assets/images/header1.png'
import img2 from '../../assets/images/header2.png'
import ScrollReveal from 'scrollreveal';


const Header = () => {
  useEffect(() => {
    ScrollReveal().reveal('.header-title', {
      duration: 1100,
      delay: 10,
      distance: '70px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.header-main_title', {
      duration: 1100,
      delay: 10,
      distance: '100px',
      origin: 'left',
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.header-img', {
      duration: 1100,
      delay: 10,
      distance: '100px',
      origin: 'left',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.header-next_img', {
      duration: 1100,
      delay: 10,
      distance: '100px',
      origin: 'right',
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <header className='header'>
      <div className="container">
        <div className="header-content">
          <div className="header-texts">
            <span>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5046 24.6797L16.8046 32.0063C16.7247 32.2216 16.5808 32.4073 16.3923 32.5384C16.2038 32.6695 15.9796 32.7398 15.75 32.7398C15.5203 32.7398 15.2962 32.6695 15.1076 32.5384C14.9191 32.4073 14.7752 32.2216 14.6953 32.0063L11.9953 24.6797C11.9383 24.5251 11.8484 24.3846 11.7319 24.2681C11.6154 24.1516 11.4749 24.0617 11.3203 24.0047L3.99371 21.3047C3.77841 21.2248 3.59273 21.0809 3.4616 20.8924C3.33048 20.7038 3.26019 20.4797 3.26019 20.25C3.26019 20.0204 3.33048 19.7962 3.4616 19.6077C3.59273 19.4191 3.77841 19.2752 3.99371 19.1953L11.3203 16.4953C11.4749 16.4384 11.6154 16.3485 11.7319 16.232C11.8484 16.1154 11.9383 15.975 11.9953 15.8203L14.6953 8.49377C14.7752 8.27847 14.9191 8.09279 15.1076 7.96166C15.2962 7.83054 15.5203 7.76025 15.75 7.76025C15.9796 7.76025 16.2038 7.83054 16.3923 7.96166C16.5808 8.09279 16.7247 8.27847 16.8046 8.49377L19.5046 15.8203C19.5616 15.975 19.6515 16.1154 19.768 16.232C19.8846 16.3485 20.025 16.4384 20.1796 16.4953L27.5062 19.1953C27.7215 19.2752 27.9072 19.4191 28.0383 19.6077C28.1694 19.7962 28.2397 20.0204 28.2397 20.25C28.2397 20.4797 28.1694 20.7038 28.0383 20.8924C27.9072 21.0809 27.7215 21.2248 27.5062 21.3047L20.1796 24.0047C20.025 24.0617 19.8846 24.1516 19.768 24.2681C19.6515 24.3846 19.5616 24.5251 19.5046 24.6797V24.6797Z" fill="#1A906B" />
                <path d="M24.75 2.25V9" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.125 5.625H21.375" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.5 10.125V14.625" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.75 12.375H29.25" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className='header-icon'>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#6D39E9" />
              </svg>
            </span>
            <h1 className="header-title">START TO SUCCESS</h1>
            <p className="header-main_title">
              Access To <span className='header-number'>5000+</span> Courses
              from <span className='header-number'>300</span> Instructors
              & Institutions
            </p>
            <p className="header-subtitle">
              Various versions have evolved over the years, sometimes by accident,
            </p>
            <div className="header-items">
              <input
                type="text"
                className='header-input'
                placeholder='What do want to learn?'
              />
              <button className="header-search_btn">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="header-images">
            <img src={img2} className='header-img' alt="header image" />
            <img src={img1} className='header-next_img' alt="header image" />
            <span className='header-line'>
              <svg width="133" height="123" viewBox="0 0 133 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M129.565 3.0665C122.861 35.2321 103.672 88.7725 80.5502 45.6094C51.6481 -8.34447 46.9199 63.7019 44.5824 95.5299C44.7666 93.6398 41.0855 165.407 3.60982 68.6392" stroke="#FFC27A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header