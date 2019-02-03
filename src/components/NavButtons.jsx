import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortAlphabetically, sortByPrice, sortByRating } from '../js/actions/index';
import '../styles/Navigation.css';

export class NavBtns extends Component {
    render() {
        return (
            <header>
                <span className="nav-btn" tabIndex="1" onClick={() => this.props.sortAlphabetically()}>sort &nbsp; <span className="sort-option">alphabetically</span></span>
                <span className="nav-btn" tabIndex="2" onClick={() => this.props.sortByPrice()}>sort by &nbsp; <span className="sort-option">price</span></span>
                <span className="nav-btn" tabIndex="3" onClick={() => this.props.sortByRating()}>sort by &nbsp; <span className="sort-option">start rating</span></span>
            </header>
        );
    };
};


export default connect(null, { sortAlphabetically, sortByPrice, sortByRating })(NavBtns);