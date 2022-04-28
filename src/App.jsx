import "./App.scss";
import dino from "./assets/dinosaur.png";

function App() {
  return (
    <div className="app">
      <p className="app__text">
        Ce template est bien configuré pour vos applications front-end avec
        Vite, Sass et Vercel
      </p>
      <img width={150} height={150} src={dino} alt="" />
      <img width={150} height={150} src="/assets/trex.png" alt="" />
    </div>
  );
}

export default App;
