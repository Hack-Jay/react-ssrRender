import React from 'react'
import { Link } from 'react-router-dom'

const Header = ()=> (
    <div> 
        <h3>
            Header
        </h3>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/login'>Login</Link>
    </div>
)

export default Header