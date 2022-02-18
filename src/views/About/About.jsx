import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="control">
        <button className=""></button>
        <button className=""></button>
        <button className=""></button>
      </div>
      <div className="about">
        <p>Jmenuji se Ondřej Němec.</p>
        <br />
        <p>Pracuji jako skladový expedient kterého baví programování.</p>
        <br />
        <p>
          V současné době se zabývám tvorbou webových stránek pomocí frameworku
          ReactJS.
        </p>
        <br />
        <p>
          Tyto stránky jsem vytvořil jako svůj první hlavní projekt, stránky
          jsou stále ve vývoji proto se za vzniklé problemy omlouvám.
        </p>
      </div>
    </div>
  );
};

export default About;
