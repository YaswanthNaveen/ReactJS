import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://udemy-react-burger-91dfa.firebaseio.com/'
});

export default instance; 