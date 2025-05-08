import { useEffect, useState } from "react";
import "./App.css";
import MovieContainer from "./MovieContainer";
import { getOpenAIResponse } from './aiservice'


function App() {
  const [message,setMessage] = useState([]);

  useEffect(() => {
    const fetchAI = async () => {
      try {
        const content = await getOpenAIResponse(
          "Give me a JSON array of 5 action movies currently on Netflix. Respond only with the array. and create a link to surround the title in order to preview each movie on netflix"
        );
        
        const parsed = JSON.parse(content); // Convert string to array
        setMessage(parsed);
      } catch (e) {
        console.error("Failed to parse AI response:", e);
      }
    };
    fetchAI();
  },[]);

  return (
    <div className="app-background">
      <MovieContainer movieData={message}></MovieContainer>
      
    </div>
  );
}

export default App;
