import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortAlphabetically, sortByPrice, sortByRating } from '../js/actions/index';
import '../styles/Navigation.css';

export class NavBtns extends Component {
    render() {
        return (
            <header>
                <button className="nav-btn" onClick={() => this.props.sortAlphabetically()}>sort alphabetically</button>
                <button className="nav-btn" onClick={() => this.props.sortByPrice()}>sort by price</button>
                <button className="nav-btn" onClick={() => this.props.sortByRating()}>sort by start rating</button>
            </header>
        );
    };
};


export default connect(null, { sortAlphabetically, sortByPrice, sortByRating })(NavBtns);