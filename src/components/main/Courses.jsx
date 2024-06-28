import React, { useContext, useEffect } from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { courseData } from '../../data/courseData';
import { CartContext } from '../../contexts/CartContext';
import ScrollReveal from 'scrollreveal';
const Courses = () => {
    const { addToCart } = useContext(CartContext)
    useEffect(() => {
        ScrollReveal().reveal('.courses-title', {
            duration: 1100,
            delay: 10,
            distance: '150px',
            origin: 'left',
            easing: 'ease-in-out',
            reset: true
        });
    }, []);
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
                                        <button className="courses-btn" onClick={() => addToCart(item)}>
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