import React from 'react'
import { Link } from 'gatsby'
import * as headerStyles from './header.module.css'

const Header = () =>  {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.logo}>
                MCPSports<span>.com</span>
            </div>
            <div className={headerStyles.headerlinks}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header 