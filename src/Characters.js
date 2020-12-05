import React from "react";
import SingleCharacter from "./SingleCharacter";
import { useGlobalContext } from "./context";

const Characters = () => {
  const { profiles } = useGlobalContext();
  return (
    <div className="section-center">
      {profiles.map((profile) => {
        return <SingleCharacter key={profile.id} profile={profile} />;
      })}
    </div>
  );
};

export default Characters;
