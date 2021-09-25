import React, { Component } from 'react'
import Slider from "react-slick";
import rasim13 from '../img/13.jpg'
import rasim12 from '../img/12.jpg'
import rasim11 from '../img/11.jpg'
export default class ReactSlick extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <>
                 <div>
        
        <Slider {...settings}>
          <div>
            <img src={rasim13} />
          </div>
          <div>
            <img src={rasim12} />
          </div>
          <div>
            <img src={rasim11} />
          </div>
        </Slider>
      </div>
            </>
        )
    }
}
