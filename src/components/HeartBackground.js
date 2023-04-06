import { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/Home.module.css";

const HEART_EMOJIS = ["🍯", "🐝", "🍪"];

const HeartBackground = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      size: Math.floor(Math.random() * 100) + 50,
      speed: Math.floor(Math.random() * 10) + 5,
      timer: 80, // tiempo en ticks que el corazón permanecerá visible
    };
    setHearts((hearts) => [...hearts, newHeart]);
  };

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setHearts((hearts) => {
        return hearts
          .map((heart) => {
            return { ...heart, timer: heart.timer - 1 };
          })
          .filter((heart) => heart.timer > 0);
      });
    }, 100); // 100ms por tick

    window.addEventListener("keydown", addHeart);

    return () => {
      window.removeEventListener("keydown", addHeart);
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={styles.heart}
          style={{
            top: heart.y,
            left: heart.x,
            fontSize: heart.size,
            animationDuration: `${20 / heart.speed}s`,
            opacity: heart.timer / 100, // opacidad proporcional al temporizador
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};
export default HeartBackground;
