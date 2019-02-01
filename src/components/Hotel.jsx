import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {} from '../js/actions/index';
import '../styles/Hotel.css'
import NavButtons from './NavButtons';

class Hotel extends Component {
    componentDidMount() {
        const button = document.getElementsByClassName('accordion');
        const hotel = document.getElementsByClassName('hotel');
        const accordion = document.getElementsByClassName('hotel-click-info');
        let clickCount = 0;


        for(let i = 0; i < button.length; i++) {

            button[i].addEventListener('click', () => {

                clickCount++;
                if(clickCount % 2 === 0) {
                    hotel[i].style.height = "350px";
                    button[i].style.height = "50px";
                } else if(clickCount % 2 === 1) {
                    hotel[i].style.height = "500px";
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
                            
                            <div id="container">
                                <div id="first">
                                    <h2>{hotel.name}</h2>
                                    <h3>{hotel.city}</h3>
                                </div>
                                <p id="second">{hotel.price}</p>
                            </div>
                            
                    
                            
                                
                            <div className="hotel-image">
                                <img src={hotel.image} alt=""/>
                            </div>
                            <div className="accordion">
                            <button className="button-text-wrapper">
                                <p className="hotel-click-info">{hotel.date} for {hotel.days} from {hotel.from}, {hotel.adults} Adults & {hotel.children} children</p>
                            </button>
                               
                            </div>
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
