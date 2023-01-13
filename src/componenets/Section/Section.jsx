import React, { useState, useEffect } from "react";
import Card from "./Card";

function Section(props) {
  // Set Data
  // imgUrl = Trending and Latest data
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setImageUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [sportsUrl, setsportsUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/sports/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setsportsUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [moviesUrl, setmoviesUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/movies/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setmoviesUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [tvUrl, settvUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/tv/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => settvUrl(data))
      .catch((err) => console.log(err));
  }, []);

  const [specialUrl, setspecialUrl] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/hotstar/special/get";
    fetch(url)
      .then((data) => data.json())
      .then((data) => setspecialUrl(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(specialUrl);

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

  let hello = [];

  if (props.name === "Sports") {hello = sportsUrl; }
  else if (props.name === "Movies") {hello = moviesUrl;  }
  else if (props.name === "TV-Shows") {hello = tvUrl; }
  else if (props.name === "Hostar Special") {hello = specialUrl;}
  else {hello = imageUrl;}

  return (
    <>
      <div className="section text-light" style={{ overflow: "hidden" }}>
        <h2>{props.name}</h2>
        <div className="section-body text-dark" style={customStyle}>
          {hello.map((image, index) => {
            return <Card name={props.name} image={image} setCard={props.setCard} key={index} click={props.click} />;
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
