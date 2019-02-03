import React, { Component } from 'react';
import NavBtns from './NavButtons';
import Hotels from './Hotel';
import '../styles/Wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <section className="wrapper">
                <NavBtns/>
                <Hotels />
            </section>
        );
    };
};

export default Wrapper;