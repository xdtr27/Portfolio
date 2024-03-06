import "./Home.scss";
import Slider from "../../components/Slider";


/// Icons
import { FaReact as ReactIcon } from "react-icons/fa";
import { TbBrandNextjs as NextIcon } from "react-icons/tb";
import { SiTypescript as TypescriptIcon } from "react-icons/si";
import { FaNode as NodeIcon } from "react-icons/fa";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { FaSass as SassIcon } from "react-icons/fa";


const images = [ReactIcon, NextIcon, TypescriptIcon, NodeIcon, TailwindIcon, SassIcon];

export default function Home() {
  return (
    <section className="Home container" id="home">
      <div className="animate bg-one"></div>
      <div className="animate bg-two"></div>
      <div className="animate bg-three"></div>

      <div className="centralTitle">
        <div className="title">
          <h1>Olá, mundo!</h1>
        </div>
        <p>
          {/* <ReactTyped
            className="typed"
            strings={[""]}
            typeSpeed={70}
            style={{
              
              textAlign: "center",
              display: "flex",
              marginLeft: "2.5rem",
            }}
            
          /> */}
          Sou o Alexandre, Desenvolvedor Front-end
        </p>
        <Slider title="ualquer coisa" images={images}/>
      </div>
    </section>
  );
}
