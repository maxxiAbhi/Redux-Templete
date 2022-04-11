import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    const selector=useSelector((state)=>state.cart)
    console.log(selector)
    return (
        <div>
            <Link className="navLink" to="/">
                Home
            </Link>
            <Link className="navLink" to="/cart">
                Cart
            </Link>
            <span className="cartCount">Cart items: {selector.length}</span>
        </div>
    )
}

export default Navbar