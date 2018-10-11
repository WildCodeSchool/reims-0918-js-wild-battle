import React from "react";

const HeroBiography = ({ selectedHeroOfList }) => (
  <div>
    <h3>{selectedHeroOfList.name}</h3>
    <p>
      <span className="itemTitleBiography">Full Name : </span>
      {selectedHeroOfList.biography["full-name"]}
    </p>

    <p>
      <span className="itemTitleBiography">Alter-Egos : </span>
      {selectedHeroOfList.biography["alter-egos"]}
    </p>

    <p>
      <span className="itemTitleBiography">Aliases : </span>
      {selectedHeroOfList.biography.aliases.map(hero => `${hero} - `)}
    </p>

    <p>
      <span className="itemTitleBiography">Place of Birth : </span>
      {selectedHeroOfList.biography["place-of-birth"]}
    </p>

    <p>
      <span className="itemTitleBiography">First appearance : </span>
      {selectedHeroOfList.biography["first-appearance"]}
    </p>

    <p>
      <span className="itemTitleBiography">Publisher : </span>
      {selectedHeroOfList.biography.publisher}
    </p>

    <p>
      <span className="itemTitleBiography">Alignement : </span>
      {selectedHeroOfList.biography.alignment}
    </p>
  </div>
);

export default HeroBiography;
