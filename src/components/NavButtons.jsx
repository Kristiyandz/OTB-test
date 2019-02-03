import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortAlphabetically, sortByPrice, sortByRating } from '../js/actions/index';
import '../styles/Navigation.css';

export class NavBtns extends Component {
    render() {
        return (
            <header>
                <button className="nav-btn" onClick={() => this.props.sortAlphabetically()}>sort <span className="sort-option">alphabetically</span></button>
                <button className="nav-btn" onClick={() => this.props.sortByPrice()}>sort by <span className="sort-option">price</span></button>
                <button className="nav-btn" onClick={() => this.props.sortByRating()}>sort by <span className="sort-option">start rating</span></button>
            </header>
        );
    };
};


export default connect(null, { sortAlphabetically, sortByPrice, sortByRating })(NavBtns);