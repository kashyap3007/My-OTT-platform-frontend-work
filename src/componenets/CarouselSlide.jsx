import React from "react";
import { Link } from "react-router-dom";

function CarouselSlide(props) {
  //   console.log(props.image);
  return (
    <>
      <div className="carousel-item active">
        <div className="carousel-caption carousel-desc  d-md-block text-item">
          <h4>{props.image.name}</h4>
          <p>{props.image.details}</p>
          <Link  to="/play"  type="button" className="btn btn-primary">
            WATCH NOW
          </Link>
          {/* <button type="button" className="btn btn-primary" onClick={props.click}>
            WATCH NOW
          </button> */}
        </div>
        <img src={props.image.src} className="d-block" alt="..." />
        {/* <img src="./images/first.jpg" class="img-thumbnail" alt="..."></img> */}
      </div>
    </>
  );
}

export default CarouselSlide;
