import React from 'react';
import logo from './logo_cropped_properly.png';

const MovieContainer = ({movieData}) => {

    return (
        <div style={{backgroundColor:"#fff",opacity:"0.7",width:"90%",maxWidth:"800px",maxHeight:"500px",overflow:"scroll",textAlign:"left",paddingLeft:"20px"}}>
            <div style={{display:"block",width:"100%",textAlign:"center"}}>
            <img alt='logo' src={logo} style={{width:"300px",height:"auto",marginTop:"0"}}/>
            <h1>Welcome to BingeMyAi</h1>
            </div>
            {Array.isArray(movieData) ? (
        movieData.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> — {item.year} <br />
              🎬 Directed by {item.director} <br />
              🎭 Starring {item.actor}
            </li>
          ))
      ) : (
        <p>Loading recommendations...</p>
      )}
        </div>
    )
}

export default MovieContainer;