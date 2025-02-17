import { useState } from "react";
import stl from "./boysCard.module.scss";

const BoysCard = ({
  name,
  url,
  phrase,
  song,
}) => {
  const [clicked, setClicked] = useState(false);
  const [audio] = useState(new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openBoy = () => {
    setClicked(true);
    togglePlay()
  };

  return (
    <div className={stl.card}>
      <h2>{name}</h2>
      <button onClick={openBoy}>Learn More</button>

      {clicked && (
        <div className={stl.modaloverlay}>
          <div className={stl.modal}>
            <img src={url} alt="images of students" />
            <div className={stl.text}>
                <h3>{name}</h3>
                <p>{phrase}</p>
            </div>
            
          </div>
          <button onClick={()=>{setClicked(false), togglePlay()}}>esc</button>
        </div>
      )}
    </div>
  );
};

export default BoysCard;
