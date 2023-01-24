import React from 'react';
import cssClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems'
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) =>(
    <header className={cssClasses.Toolbar}> 
    <DrawerToggle toggle={props.toggle}/>
    <div className={cssClasses.Logo}>
             <Logo/>
             </div>
    <nav className={cssClasses.desktopOnly}>
        <Navigationitems isAuthenticated={props.isAuth}/>
    </nav>
</header>
)
   

export default Toolbar;