import React from "react";

const HeroBiography = ({ selectedHeroOfList }) => (
  <div>
    <h3>{selectedHeroOfList.name}</h3>

    {selectedHeroOfList.biography["full-name"] !== "" && (
      <p>
        <span className="itemTitleBiography">Full Name</span>:{" "}
        {selectedHeroOfList.biography["full-name"]}
      </p>
    )}

    {selectedHeroOfList.biography["alter-egos"] !== "No alter egos found." && (
      <p>
        <span className="itemTitleBiography">Alter-Egos</span>:{" "}
        {selectedHeroOfList.biography["alter-egos"]}
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

    {selectedHeroOfList.biography["place-of-birth"] !== "-" && (
      <p>
        <span className="itemTitleBiography">Place of Birth</span>:{" "}
        {selectedHeroOfList.biography["place-of-birth"]}
      </p>
    )}

    {selectedHeroOfList.biography["first-appearance"] !== "-" && (
      <p>
        <span className="itemTitleBiography">First appearance</span>:{" "}
        {selectedHeroOfList.biography["first-appearance"]}
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

    {selectedHeroOfList.connections["group-affiliation"] !== "-" && (
      <p>
        <span className="itemTitleBiography">Group affiliation</span>:{" "}
        {selectedHeroOfList.connections["group-affiliation"]}
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
