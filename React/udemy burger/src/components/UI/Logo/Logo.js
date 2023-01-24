import React from 'react'
import cssClasses from './Logo.css'
import Logoimage from '../../../assests/images/burger-logo.png'
const Logo = (props) =>(
    <div className={cssClasses.Logo}>
        <img src={Logoimage} alt='logo'></img>
    </div>
)
export default Logo;