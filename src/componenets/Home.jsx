import React from "react";
import Carousel from './Carousel';
 import Footer from './Footer';
import ProfilePage from "./Section/ProfilePage";
import Navbar from './Navbar';
import Section from './Section/Section';

function Home(props){
    return( 
        <>
         <Navbar username= {props.username} />
        <Carousel click={props.click}/>
        <Section setCard={props.setCard} name={"Latest and Trending"}  />
        <Section setCard={props.setCard}  name={"Sports"}  />
        <Section setCard={props.setCard}  name={"Movies"}  />
        <Section setCard={props.setCard}  name={"TV-Shows"  }/>
        <Section setCard={props.setCard}  name={"Hostar Special" }/>
        <Footer/>  
        {/* <ProfilePage/> */}
        {/* <Carousel click={props.click}/>
        <Section name={"Latest and Trending"} />
        <Section name={"Sports"} click={props.click} />
        <Section name={"Movies"} click={props.click} />
        <Section name={"TV-Shows"  }click={props.click}/>
        <Section name={"Hostar Special" } click={props.click}/> */}
        
        </>
    )
}

export default Home;