import Card from "../../components/Card";
import "./Projects.scss";
import { projetos } from "../../utils/projects";

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2>
        Projetos<span>.</span>
      </h2>
      <div className="destaques">
        <h3>Destaques</h3>
        <div className="cards">
          {projetos.map((projeto) => (
            <Card
              key={projeto.id}
              name={projeto.name}
              date={projeto.date}
              techs={projeto.techs}
              image={projeto.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
