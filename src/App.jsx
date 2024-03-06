import "./App.scss";




import Header from "./components/Header";
import Modal from "./components/Modal";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Modal />
    </div>
  );
}
