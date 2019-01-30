import React, { Component } from 'react';
import NavBtns from './components/NavButtons';
import Hotels from './components/Hotel';
import './styles/App.css';


class App extends Component {
    render(){
        return (
            <div class="main">
                <NavBtns />
                <Hotels />
            </div>
            
        );
    };
};

export default App;