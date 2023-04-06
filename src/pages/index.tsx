import { useState, useEffect } from "react";
import HeartBackground from "../components/HeartBackground";
export default function Home() {
  const [keyPressed, setKeyPressed] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const allowedKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"];

      if (allowedKeys.includes(event.key)) {
        setKeyPressed(event.key);
        console.log(event.key);
        playSound({ key: event.key });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleAnimationEnd = () => {
    setKeyPressed("");
  };

  const playSound = ({ key }: { key: any }) => {
    const audioElement = new Audio(`/sounds/${key}.mp3`);
    audioElement.play();
  };

  return (
    <>
      <HeartBackground />
    </>
  );
}
