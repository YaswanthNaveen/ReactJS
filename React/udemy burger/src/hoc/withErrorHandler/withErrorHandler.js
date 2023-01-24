import React, { Component } from 'react';
import GlobalAux from '../GlobalAux/GlobalAux';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        closed = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <GlobalAux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.closed}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </GlobalAux>
            )
        }
    }
}

export default withErrorHandler