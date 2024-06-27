import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { courseData } from '../../data/courseData';
const Courses = () => {
    return (
        <section className='courses'>
            <div className="container">
                <div className="courses-content">
                    <h1 className="courses-title">
                        Most Popular Course
                    </h1>

                    <div className="courses-cards">
                        {
                            courseData.map((item) => (
                                <div className="courses-card">
                                    <img src={item.img} alt="" />
                                    <h1 className="courses-card_title">
                                        {item.title}
                                    </h1>
                                    <h2 className='courses-language'>{item.language}</h2>
                                    <div className="courses-items">
                                        <span className='courses-price'>{item.price}</span>
                                        <button className="courses-btn">
                                            <MdOutlineAddShoppingCart />
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses