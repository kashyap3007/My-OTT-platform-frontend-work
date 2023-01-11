import React, { useState, useEffect } from "react";
import Card from "./Card";

function Section(props) {
  // Set Data
  // imgUrl = Total Data
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setImageUrl(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(imageUrl);

  const [isTranslate, setIsTranslate] = useState(false);
  const [translateValue, setTranslateValue] = useState(0);
  function clickHandler1(event) {
    const idName = event.target.id;
    setIsTranslate(true);
    if (idName === props.name) {
      setTranslateValue((prevValue) => {
        if (prevValue === -200) return 0;
        return prevValue - 100;
      });
    }
  }
  function clickHandler2(event) {
    const idName = event.target.id;
    if (idName === props.name) {
      setTranslateValue((prevValue) => {
        if (prevValue + 100 > 0) {
          setIsTranslate(false);
          return 0;
        }
        return prevValue + 100;
      });
    }
  }
  const customStyle = {
    transform: "translateX(" + translateValue + "%)", 
  };
  return (
    <>
      <div className="section text-light" style={{ overflow: "hidden" }}>
        <h2>{props.name}</h2>
        <div className="section-body text-dark" style={customStyle}>
          {imageUrl.map((image, index) => {
            return <Card image={image} key={index} click= {props.click}/>;
          })}
        </div>
        <i
          onClick={clickHandler1}
          id={props.name}
          className="fa-solid fa-greater-than slide-button bottom"
        ></i>
        {isTranslate ? (
          <i
            onClick={clickHandler2}
            id={props.name}
            className="fa-solid fa-less-than slide-button-back bottom"
          ></i>
        ) : null}
      </div>
    </>
  );
}

export default Section;
