import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  // console.log(props);
  //   console.log(props.image);

  const [isTrue, setIsTrue] = useState(false);
  function mouseOverHandler() {
    setIsTrue(true);
  }
  function mouseOutHandler() {
    setIsTrue(false);
  }
  return (
    <>
      <div
        onMouseOut={mouseOutHandler}
        onMouseOver={mouseOverHandler}
        className="card"
        style={{
          width: "15rem",
          height: "20rem",
          // backgroundColor: "green",
          backgroundImage: `url(${props.image.src})`,
        }}
      >
        {isTrue ? (
          <div class="card-body">
            <h5 class="card-title">{props.image.name}</h5>
            <p class="card-text">{props.image.details}</p>
            <Link  to="/play" class="btn btn-primary" >
            {/* <Link to="/" class="btn btn-primary" onClick={props.click}> */}
              Watch
            </Link>
          </div>
        ) : ( 
          <img
            src={props.image.src}
            className="card-img-top w-100 h-100"
            alt="..."
          />
        )}
      </div>
    </>
  );
}

export default Card;