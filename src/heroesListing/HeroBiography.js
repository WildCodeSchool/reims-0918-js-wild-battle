import React from "react";

const HeroBiography = ({ selectedHeroOfList }) => (
  <div>
    <h3>{selectedHeroOfList.name}</h3>

    {selectedHeroOfList.biography["fullName"] !== "" && (
      <p>
        <span className="itemTitleBiography">Full Name</span>:{" "}
        {selectedHeroOfList.biography["fullName"]}
      </p>
    )}

    {selectedHeroOfList.biography["alterEgos"] !== "No alter egos found." && (
      <p>
        <span className="itemTitleBiography">Alter-Egos</span>:{" "}
        {selectedHeroOfList.biography["alterEgos"]}
      </p>
    )}

    {selectedHeroOfList.biography.aliases[0] !== "-" && (
      <p>
        <span className="itemTitleBiography">Aliases</span>:{" "}
        {selectedHeroOfList.biography.aliases.map((hero, index) => {
          return index === selectedHeroOfList.biography.aliases.length - 1
            ? `${hero}`
            : `${hero} - `;
        })}
      </p>
    )}

    {selectedHeroOfList.biography["placeOfBirth"] !== "-" && (
      <p>
        <span className="itemTitleBiography">Place of Birth</span>:{" "}
        {selectedHeroOfList.biography["placeOfBirth"]}
      </p>
    )}

    {selectedHeroOfList.biography["firstAppearance"] !== "-" && (
      <p>
        <span className="itemTitleBiography">First appearance</span>:{" "}
        {selectedHeroOfList.biography["firstAppearance"]}
      </p>
    )}

    {selectedHeroOfList.biography.publisher !== "null" && (
      <p>
        <span className="itemTitleBiography">Publisher</span>:{" "}
        {selectedHeroOfList.biography.publisher}
      </p>
    )}

    {selectedHeroOfList.biography.alignement !== "" && (
      <p>
        <span className="itemTitleBiography">Alignement</span>:{" "}
        {selectedHeroOfList.biography.alignment}
      </p>
    )}

    {selectedHeroOfList.connections["groupAffiliation"] !== "-" && (
      <p>
        <span className="itemTitleBiography">Group affiliation</span>:{" "}
        {selectedHeroOfList.connections["groupAffiliation"]}
      </p>
    )}

    {selectedHeroOfList.connections.relatives !== "-" && (
      <p>
        <span className="itemTitleBiography">Relatives</span>:{" "}
        {selectedHeroOfList.connections.relatives}
      </p>
    )}
  </div>
);

export default HeroBiography;
