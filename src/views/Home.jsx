import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="control">
          <button className="cross"></button>
          <button className="minus"></button>
          <button className="ctverec"></button>
        </div>
        <div className="home">
          <p>
            <em>Vítejte na stránkách</em>
          </p>
          <br />
          <small>
            Stránky byli vytvořeny pomocí frameworku{" "}
            <a href="https://reactjs.org/">ReactJs</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Home;
