import React from "react";
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

const content = [
  {
    image: "/images/car-1.jpg",
  },
  {
    image: "/images/car.jpg",
  },
  {
    image: "/images/car-3.jpg",
  }
];

export default function banner(props) {

  return(
    <Slider className="sliderwrapper" autoplay={2500}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slidercontent"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
        </div>
      ))}
    </Slider>
  )
}
