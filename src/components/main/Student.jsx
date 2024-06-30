import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../assets/styles/Main.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { studentsData } from '../../data/studentsData';

const Student = () => {
  return (
    <section className='student'>
      <div className="container">
        <div className="student-content">
          <h1 className="backet-title">
            Student <span className='backet-color'>Feedback</span>
          </h1>
          <Swiper
            style={{
              "--swiper-pagination-color": "#20b486",
              "--swiper-pagination-bullet-inactive-color": "#cfd3d6",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              340: {
                slidesPerView: 1,
              },
              968: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {
              studentsData.map((item) => (
                <SwiperSlide>
                  <div className="student-card" key={item.id}>
                    <div className="student-info">
                      <img src={item.img} alt={item.name} />
                      <div className='student-items'>
                        <h1 className='student-name'>{item.name}</h1>
                        <h2 className='student-job'>{item.job}</h2>
                      </div>
                    </div>
                    <p className='student-subtitle'>{item.text}</p>
                    <p className='student-text'>{item.subtitle}</p>

                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </div>
    </section>
  )
}

export default Student