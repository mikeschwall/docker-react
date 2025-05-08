import React from 'react';
import logo from './logo_cropped_properly.png';

const MovieContainer = ({ movieData }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        opacity: 0.95,
        width: "90%",
        maxWidth: "800px",
        maxHeight: "500px",
        overflowY: "auto",
        margin: "2rem auto",
        padding: "1rem",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
      }}
    >
      <img
        alt="BingeMyAI logo"
        src={logo}
        style={{ width: "220px", height: "auto", marginBottom: "1rem" }}
      />
      <h1 style={{ marginBottom: "1rem" }}>Welcome to BingeMyAi</h1>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {movieData.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.75rem" }}>
            <a
              href={item.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1e90ff",
                textDecoration: "none",
                fontSize: "1.1rem"
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieContainer;
