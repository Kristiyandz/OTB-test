import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {} from '../js/actions/index';
import '../styles/Hotel.css'
import NavButtons from './NavButtons';

class Hotel extends Component {
    componentDidMount() {
        const button = document.getElementsByClassName('accordion');
        const hotel = document.getElementsByClassName('hotel');
        let clickCount = 0;


        for(let i = 0; i < button.length; i++) {

            button[i].addEventListener('click', () => {

                clickCount++;
                if(clickCount % 2 === 0) {
                    hotel[i].style.height = "250px";
                    button[i].style.height = "50px";
                } else if(clickCount % 2 === 1) {
                    hotel[i].style.height = "400px";
                    button[i].style.height = "200px";
                };
                
            })

        };
      
           

        
    }
    render() {
        return (
            <section>
                {this.props.hotels.map(hotel => {
                    return (
                        <div className="hotel">
                            <header className="hotel-header">
                                <span className="hotel-name">

                                </span>
                                <span className="hotel-price">
                                    <p className="hotel-price-tag">hoilday price</p>
                                    <p className="price">£{hotel.price}</p>
                                </span>
                            </header>
                            <img src="" alt=""/>
                            <button className="accordion"></button>
                        </div> 
                    )
                })}
               
            </section>
        );
    };
};



const mapStateToProps = state => {
    return {
        hotels: state.hotels
    };
};

export default connect(mapStateToProps)(Hotel);
