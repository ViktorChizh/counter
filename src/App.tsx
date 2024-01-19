import React from 'react'
import './App.css';
import {SingleCounter} from './components/SingleCounter';
import {CounterWithSettings} from './components/CounterWithSettings';

function App() {
    return (
        <div className='wrapper' >
            <SingleCounter/>
            <CounterWithSettings/>
        </div>
    )
}
export default App;

