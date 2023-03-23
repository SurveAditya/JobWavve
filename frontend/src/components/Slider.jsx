import React from "react";
import ONE from '../images/one.png'
import TWO from '../images/two.png'
import THREE from '../images/three.png'
import { useNavigate } from 'react-router-dom';
const IMGS = [ONE, TWO, THREE];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const navigate = useNavigate();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === IMGS.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        onClick={() => {
          window.location.href="https://jobwave-careerfair.glitch.me";
        }}
      >
        {IMGS.map((IMG, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${IMG})` ,
            backgroundSize: 'contain',
            backgroundPosition: 'center' }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {IMGS.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
