import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/Hotel.css'
import NavButtons from './NavButtons';
import { counter } from '@fortawesome/fontawesome-svg-core';

class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.isClickedOnce = this.isClickedOnce.bind(this);
    } 
    componentDidMount() {
        const button = document.getElementsByClassName('accordion');
        const hotel = document.getElementsByClassName('hotel');
        const accordion = document.getElementsByClassName('accordion');
        const description = document.getElementsByClassName('hotel-description');
    
        let clickCount = 0;

        for(let i = 0; i < button.length; i++) {

            button[i].addEventListener('click', () => {

                

                clickCount++;
                if(clickCount % 2 === 0) {
                    hotel[i].style.height = "350px";
                    button[i].style.height = "50px";
                    accordion[i].style.bottom = "0px";
                    description[i].style.visibility = "hidden";
                } else if(clickCount % 2 === 1) {
                    hotel[i].style.height = "500px";
                    button[i].style.height = "50px";
                    accordion[i].style.bottom = "150px";
                    description[i].style.visibility = "visible";

                };
            })

        };
    }
    isClickedOnce() {
       

          function  makeCount() {;
            let count = 0;
            return function () {
                return count++;
            }
       }


       let increment = makeCount();
       increment()
       console.log(increment())
       if(increment() % 2 === 0) {
        this.setState({
            clicked: false
        });
        
    } else if(increment() % 2 === 1) {
        this.setState({
            clickd: true
        });
        
    }
        
    }
    showDownChevron() {
        return <FontAwesomeIcon icon={faChevronDown} />
    }
    showRightChevron() {
        return <FontAwesomeIcon icon={faChevronRight} />
    }
    accordionButtonInformation({date, days, from, adults, children, infants}) {

        let adultNumberFormatted = null;
        let childrenNumberFormatted = null;
        let infantNumberFormatted = null;
        const spanOpen = '<span className="acc-info">';
        const spanclose = '</span>';

        if(adults === 1 ) {
            adultNumberFormatted = `${spanOpen}${date}${spanclose} for ${spanOpen}${days} days${spanclose} from ${spanOpen}${from}${spanclose}, ${spanOpen}${adults}${spanclose} Adults`;
        } else if(adults > 1) {
            adultNumberFormatted = `${spanOpen}${date}${spanclose} for ${spanOpen}${days} days${spanclose} from $${spanOpen}${from}${spanclose}, ${spanOpen}${adults}${spanclose} Adults`;
        } else if(adults === 0) {
            adultNumberFormatted = '';
        };

        if(children === 1) {
            childrenNumberFormatted = `${spanOpen}${children}${spanclose} child`;
        } else if(children > 1) {
            childrenNumberFormatted = `${spanOpen}${children}${spanclose} children`;
        } else if(children === 0) {
            childrenNumberFormatted = '';
        };

        if(infants === 1) {
            infantNumberFormatted = `${spanOpen}${infants}${spanclose} infant`;
        } else if(infants > 1) {
            infantNumberFormatted = `${spanOpen}${infants}${spanClos} infants`;
        } else if(infants === 0) {
            infantNumberFormatted = '';
        };

        if(childrenNumberFormatted === '' && infantNumberFormatted === '') {
            return adultNumberFormatted;
        } else if(childrenNumberFormatted === '') {
            return `${adultNumberFormatted} & ${infantNumberFormatted}`;
        } else if(infantNumberFormatted === '') {
            return `${adultNumberFormatted} & ${childrenNumberFormatted}`;
        } else {
            return `${adultNumberFormatted}, ${childrenNumberFormatted} & ${infantNumberFormatted}`;
        };

    }
    render() {
        return (
            <section>
                {this.props.hotels.map(hotel => {
                    return (
                        <div className="hotel">
                            <div className="hotel-image">
                            <div id="container">
                                <div id="first">
                                    <h2 id="hotel-name">{hotel.name}<span>{}</span></h2>
                                    <p id="hotel-city">{hotel.city}, {hotel.country}</p>
                                </div>
                                <div className="holiday-price">
                                    <div className="price-info">
                                        <p id="tag">holiday price</p>
                                        <p id="price">£{hotel.price}</p>
                                    </div>
                                </div>
                                
                            </div>
                                <img src={hotel.image} alt=""/>
                            </div>
                            <div className="accordion">
                                <button className="button-text-wrapper" onClick={this.isClickedOnce}>
                                    <p className="hotel-click-info" dangerouslySetInnerHTML={{__html: this.accordionButtonInformation(hotel)}}></p>
                                   {this.state.clicked ? this.showDownChevron() : this.showRightChevron()}
                                </button>
                            <p className="hotel-description">{hotel.description}</p>
                               
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
