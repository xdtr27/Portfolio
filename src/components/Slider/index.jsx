import "./Slider.scss";

import { FaReact as ReactIcon } from "react-icons/fa";
import { TbBrandNextjs as NextIcon } from "react-icons/tb";
import { SiTypescript as TypescriptIcon } from "react-icons/si";
import { FaNode as NodeIcon } from "react-icons/fa";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { FaSass as SassIcon } from "react-icons/fa";
import { useState } from "react";

const images = [
  { icon: <ReactIcon />, key: 0 },
  { icon: <NextIcon />, key: 1 },
  { icon: <TypescriptIcon />, key: 2 },
  { icon: <NodeIcon />, key: 3 },
  { icon: <TailwindIcon />, key: 4 },
  { icon: <SassIcon />, key: 5 },
];

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - (1 % images.length)) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div>
      <button onClick={prevSlide}>Anterior</button>
      {images.map((image) => (
        <span key={image.key}>{image.icon}</span>
      ))}
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
}
