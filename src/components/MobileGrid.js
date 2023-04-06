import React from "react";
import styles from "../styles/Home.module.css";

const MobileGrid = ({ playSound }) => {
  const sounds = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];

  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      {sounds.map((sound, index) => (
        <button
          key={index}
          className={`${styles.button} col-span-1 text-3xl md:text-5xl`}
          onClick={() => playSound({ key: sound })}
        ></button>
      ))}
    </div>
  );
};

export default MobileGrid;
