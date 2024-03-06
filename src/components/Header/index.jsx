/// aqui é renderizado os headers de acordo com suas orientações

import "./Header.scss";
export default function Header() {
  /// Mobile Icon Menu click

  function IconMenuClick() {
    document.querySelector(".icon-menu").classList.toggle("closeIcon");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const body = document.querySelector("body")
    body.classList.toggle("scroll-lock")
    main.classList.toggle("blur")
    header.classList.toggle("show");
  }

  return (
    <header className="container" id="#header">
      <div className="logo">&lt;/&gt;</div>
      <div className="box">
        <nav className="web-links">
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
        <a className="button" href="#">
          Baixar currículo
        </a>
      </div>
      <div className="icon-menu" onClick={() => IconMenuClick()}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
      </div>

      <div className="mobile-links">
        <nav>
          <ul onClick={() => IconMenuClick()}>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
      </div>
     
    </header>
  );
}
