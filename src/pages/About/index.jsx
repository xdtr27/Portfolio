import "./About.scss";
import alexImage from "../../assets/images/branco.png";

/// ICONS

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="about container" id="about">
      <div className="aboutBox">
        <div className="aboutImage">
          <img src={alexImage} alt="foto de Alexandre" />
          <div className="cover"></div>
        </div>
        <div className="aboutText">
          <h3>Quem Sou?</h3>
          <div className="description">
            <h2>Alexandre</h2>
            <small>Desenvolvedor Front-End Júnior</small>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              vel unde dolor dolorum voluptatum? Repellat facilis impedit qui a
              cum eum at quo minus dolore explicabo? Blanditiis pariatur quaerat
              repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quae repudiandae odio obcaecati voluptatum distinctio aliquid
              impedit rem. Quas fugiat id voluptas. Accusamus libero unde
              tempora nobis dignissimos! Molestiae, neque ad.
            </p>
          </div>
          <div className="contact">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
