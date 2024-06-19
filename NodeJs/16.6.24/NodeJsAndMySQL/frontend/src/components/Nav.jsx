import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/students'>Students</Link></li>
                <li><Link to='/average'>Student Average</Link></li>
                <li><Link to='/cities'>City Average</Link></li>
                
            </ul>
        </nav>
    </div>
    )
}

export default Nav
