import React from "react";
import { SPACES } from "./spaces/Spaces.js";
import styles from "./Piece.module.css";

export const Piece = ({ spaceId, color }) => {
  let space;
  for (let i = 0; i < SPACES.length; i++) {
    if (SPACES[i].id === String(spaceId)) {
      space = SPACES[i].coord;
      console.log(space[0]);
      break;
    }
  }

  return (
    <div className={styles.piece} style={{ top: space[0], left: space[1] }}>
      <div className={styles.dotBot} style={{ backgroundColor: color }}></div>
      <div className={styles.rec} style={{ backgroundColor: color }}></div>
      <div className={styles.dot} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Piece;
