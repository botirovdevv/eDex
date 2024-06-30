import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { MdRemoveShoppingCart } from "react-icons/md";

const Backet = () => {
    const { cart, removeFromCart, clearAll } = useContext(CartContext)
    return (
        <div>
            {
                cart.length === 0 ? (
                    <h1 className='backet-text'>Your Cart is empty</h1>
                ) : (
                    <section className="backet">
                        <div className="container">
                            <div className="backet-items">
                                <h1 className="backet-title">Your <span className='backet-color'>Courses</span></h1>
                                <button className="backet-clear_btn" onClick={clearAll}>Clear All</button>
                            </div>
                            <div className="courses-cards">
                                {
                                    cart.map((item) => (
                                        <div className="courses-card">
                                            <img src={item.img} alt="" />
                                            <h1 className="courses-card_title">
                                                {item.title}
                                            </h1>
                                            <h2 className='courses-language'>{item.language}</h2>
                                            <div className="courses-items">
                                                <span className='courses-price'>{item.price}</span>
                                                <button className="backet-btn" onClick={() => removeFromCart(item.id)}>
                                                    <MdRemoveShoppingCart />
                                                </button>
                                            </div>

                                        </div>

                                    ))
                                }
                            </div>
                        </div>

                    </section>
                )
            }
        </div>
    )
}

export default Backet