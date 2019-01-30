import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {} from '../js/actions/index';
import '../styles/Hotel.css'

class Hotel extends Component {
    
    render() {
        return (
            <div>
                {this.props.hotels.map(hotel => {
                    return (
                        <section>
                            
                        </section> 
                    )
                })}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        hotels: state.hotels
    };
};



export default connect(mapStateToProps)(Hotel);
