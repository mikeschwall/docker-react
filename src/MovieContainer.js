import React from 'react';
import logo from './logo_cropped_properly.png';

const MovieContainer = () => {

    return (
        <div style={{backgroundColor:"#fff",opacity:"0.7",width:"90%",maxWidth:"800px",minHeight:"300px",textAlign:"center"}}>
            <img alt='logo' src={logo} style={{width:"300px",height:"auto",marginTop:"-10px"}}/>
            <h1>Welcome to BingeMyAi</h1>
        </div>
    )
}

export default MovieContainer;