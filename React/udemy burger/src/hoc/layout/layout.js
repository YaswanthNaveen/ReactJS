import React, { Component } from 'react';
import GlobalAux from '../GlobalAux/GlobalAux'
import cssClasses from './layout.css'
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../components/UI/Navigation/Sidedrawer/Sidedrawer';
import { connect } from 'react-redux';
class Layout extends Component {
    state = {
        SidedrawerState: true

    }
    toggleSideDrawer = () => {
        const flag = !this.state.SidedrawerState;
        this.setState({ SidedrawerState: flag })
    }
    render() {
        return (<GlobalAux>
            <Toolbar
                toggle={this.toggleSideDrawer}
                isAuth={this.props.isAuthenticated}
            />
            <Sidedrawer
                isAuth={this.props.isAuthenticated}
                show={this.state.SidedrawerState}
                toggle={this.toggleSideDrawer} />
            <main className={cssClasses.Content}>
                {this.props.children}
            </main>
        </GlobalAux>)


    }

}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );