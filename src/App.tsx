import React from 'react'
import './App.css';
import {SingleCounter} from './components/SingleCounter';
import {CounterWithSettings} from './components/CounterWithSettings';
import {Provider} from 'react-redux';
import {store} from './reducer/Store';

function App() {
    return (
        <Provider store={store}>
            <div className='wrapper'>
                <SingleCounter/>
                <CounterWithSettings/>
            </div>
        </Provider>
    )
}

export default App;

