import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Backet = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            {
                cart.length === 0 ? (
                    <h1 className='backet-title'>Your Cart is empty</h1>
                ) : (

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
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Backet