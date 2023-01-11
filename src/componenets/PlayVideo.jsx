import React from 'react';
// import Navbar from './Navbar';
 import Footer from './Footer';
import Section from './Section/Section';
import Play from './Section/Play';
import Navbar from './Navbar';

function PlayVideo(props){
    return( 
        <>
        <Navbar username= {props.username}  />
        <Play/>
        <Section name={"More like this"}/>
        <Footer/>  
        </>
    )
}

export default PlayVideo;