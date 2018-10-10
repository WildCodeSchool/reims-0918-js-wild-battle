import React from "react";

const HeroBiography = ({ selectedHeroOfList }) => (
    <div>
        <h3>{selectedHeroOfList.name}</h3>
        <p>
            <span className="itemTitleBiography">Full Name : </span>
            {console.log(selectedHeroOfList.biography)}
        </p>

        <p>
            <span className="itemTitleBiography">Alter-Egos : </span>
            a corriger
    </p>

        <p>
            <span className="itemTitleBiography">Aliases : </span>
            {selectedHeroOfList.biography.aliases.map(hero => `${hero} - `)}
        </p>

        <p>
            <span className="itemTitleBiography">Place of Birth : </span>
            a corriger
    </p>

        <p>
            <span className="itemTitleBiography">First appearance : </span>
            a corriger
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
