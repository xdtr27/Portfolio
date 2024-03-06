import "./Modal.scss";
import { seeMore } from "../../utils/seeMore";
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function Modal(title, text) {
  return (
    <section className="modal">
      <div className="modal-box">
        <div className="modal-one">
          <h2>▶</h2>
          <div className="buttons">
            <button className="button">acessar repositorio</button>
            <button className="button">acessar projeto</button>
          </div>
        </div>
        <div className="modal-two">
          <h2>Título</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus repudiandae saepe officiis? Culpa quia quis quam
            eligendi, qui omnis nisi dolorum aperiam quae officiis esse ipsum,
            dolores quo! Corrupti!
          </p>
        </div>
        <div className="iconClose" onClick={() => seeMore()}><IoIosCloseCircleOutline /></div>
      </div>
    </section>
  );
}
