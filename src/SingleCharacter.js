import React from "react";

const SingleCharacter = ({ profile, page }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    origin,
    location,
  } = profile;

  return (
    <article key={id} className="character">
      <img src={image} className="photo" alt={name} />
      <div className="item-info">
        <div className="item-header">
          <h2>{name}</h2>
          <p>
            {status} - {species}
          </p>
        </div>
        <div className="item-body">
          <p>Gender: {gender}</p>
          <p>{type}</p>
          <h4>
            Origin: <span style={{ fontWeight: 400 }}>{origin.name}</span>
          </h4>
          <h4>
            Location: <span style={{ fontWeight: 400 }}>{location.name}</span>
          </h4>
        </div>
      </div>
    </article>
  );
};

export default SingleCharacter;
