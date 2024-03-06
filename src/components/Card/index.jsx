import "./Card.scss";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { seeMore } from "../../utils/seeMore";
const techIcons = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
];





export default function Card(props) {
   



  return (
    <div className="projectCard" onClick={() => seeMore()}>
      <figure>
        <img src={props.image} alt="" />
        <figcaption>
          <strong>{props.name}</strong>
          <div className="techs">
            {props.techs.map((tech) =>
              techIcons.map((techIcon) =>
                tech == techIcon.name ? techIcon.icon : null
              )
            )}
          </div>
        </figcaption>
        <div className="more">
          <span>17 de janeiro de 2024</span>
          <button type="button" onClick={() => seeMore()}>Ver mais</button>
        </div>
      </figure>
    </div>
  );
}
