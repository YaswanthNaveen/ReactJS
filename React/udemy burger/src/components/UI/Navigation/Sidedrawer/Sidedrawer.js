import React from 'react';
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'
import GlobalAux from '../../../../hoc/GlobalAux/GlobalAux'
import Backdrop from '../../BackDrop/BackDrop'
import cssClasses from './Sidedrawer.css'
const Sidedrawer = (props) => {
    let SidedrawerCssClasses = [cssClasses.Sidedrawer, cssClasses.Close].join(' ')
    if (props.show) {
        SidedrawerCssClasses = [cssClasses.Sidedrawer, cssClasses.Open].join(' ')
    }
    return (
        <GlobalAux>
            <div className={cssClasses.desktopOnly}>
                <Backdrop show={props.show} Click={props.toggle}></Backdrop>
            </div>

            <div className={SidedrawerCssClasses} onClick={props.toggle}>

                <div className={cssClasses.Logo}>
                    <Logo />
                </div>

                <nav>
                    <Navigationitems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </GlobalAux>

    )

}
export default Sidedrawer;