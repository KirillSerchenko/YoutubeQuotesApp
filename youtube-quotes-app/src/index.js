import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './Components/Main/App';
import reducer from './Store/Reducer/reducer'
import './index.css'
const store = createStore(reducer)//create Store with Reducer.

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

