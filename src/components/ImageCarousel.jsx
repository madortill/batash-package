import { useState } from "react";
import "../style/Carousel.css";
import tigris from "../assets/images/tigris.png";
import sufa from "../assets/images/sufa.png";
import safety from "../assets/images/safety.png";
import david from "../assets/images/david.png";
import savana from "../assets/images/savana.png";

function ImageCarousel() {
  const items = [
    { img: tigris, link: "/content/know-car", disabled: true },
    { img: sufa, link: "/content/defender", disabled: true },
    { img: safety, link: "/content/highlix" },
    { img: david, link: "https://madortill.github.io/batash-david/" },
    { img: savana, link: "/content/safety", disabled: true },
  ];
  const [active, setActive] = useState(2); // האמצעי

  const prev = () => {
    setActive((prev) => (prev + 1 + items.length) % items.length);
  };

  const next = () => {
    setActive((prev) => (prev - 1) % items.length);
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={prev}>
        ‹
      </button>

      <div className="carousel">
        {items.map((item, index) => {
          const diff = (index - active + items.length) % items.length;

          let position = diff;
          if (diff > items.length / 2) {
            position = diff - items.length;
          }

          return (
            <img
              key={index}
              src={item.img}
              alt=""
              className={`carousel-item ${
                item.disabled ? "carousel-item-disabled" : ""
              }`}
              style={{
                transform: `
      translateX(${position * 16}rem)
      scale(${position === 0 ? 1 : 0.8})
    `,
                opacity: position === 0 ? 1 : 0.4,
                zIndex: position === 0 ? 3 : 1,
                pointerEvents:
                  position === 0 && !item.disabled ? "auto" : "none",
              }}
              onClick={() => {
                if (position === 0 && !item.disabled) {
                  window.location.href = item.link;
                }
              }}
            />
          );
        })}
      </div>

      <button className="carousel-arrow right" onClick={next}>
        ›
      </button>
    </div>
  );
}

export default ImageCarousel;
