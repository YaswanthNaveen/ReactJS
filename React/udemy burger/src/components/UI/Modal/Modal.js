import React , {Component} from 'react';
import cssClasses from './Modal.css'
import GlobalAux from '../../../hoc/GlobalAux/GlobalAux'
import BackDrop from '../BackDrop/BackDrop'
class Modal extends Component{
    shouldComponentUpdate=(nextProps,nextState)=>{
        return nextProps.show!==this.props.show || nextProps.children!==this.props.children

    }
    render(){
        return( <GlobalAux>
            <BackDrop show={this.props.show} Click={this.props.modalClosed}/>
             <div 
     className={cssClasses.Modal}
     style={
         {
             transform :this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity : this.props.show ? '1' :'0'
         }
     }
     >{this.props.children}</div>
         </GlobalAux>)
    }
} 
    

export default Modal;