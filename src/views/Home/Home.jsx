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
          <h2>
            <em>Vítejte na webu</em>
          </h2>
          <br />
          <br/>
          <small>
            Stránky byly vytvořeny pomocí frameworku{" "}
            <a href="https://reactjs.org/">ReactJs</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Home;
