import React, { useState } from "react";
import Donation from "./Donation";

function AnimalPicture(props) {
  const name = props.name;
  const pic = props.pic;
  const id = props.id;
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <div
        style={{ display: isHidden ? "none" : "block" }}
        onClick={() => setIsHidden(!isHidden)}
        className="animal-pic-container"
      >
        <img src={pic} alt={name}></img>
        <h2>{name}</h2>
      </div>
      <div style={{ display: isHidden ? "flex" : "none" }}>
        <Donation name={`Help us protect ${name} by adopting one! `} id={id} />
      </div>
    </div>
  );
}

export default AnimalPicture;
