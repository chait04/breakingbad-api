import React from "react";
import CharacterItem from "./CharacterItem";
import LoopIcon from "@material-ui/icons/Loop";

function Character({ items, isLoading }) {
  return isLoading ? (
    <h1 className="spinner">
      <LoopIcon />
    </h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
      <span className={window.innerHeight > 100 ? "fixed_link" : " "}>
        <a href="#top">Top</a>
      </span>
    </section>
  );
}

export default Character;
