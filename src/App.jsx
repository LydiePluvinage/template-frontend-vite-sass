import "./App.scss";
// Méthode 1 des images : on importe chaque image
import dino from "./assets/dinosaur.png";

function App() {
  return (
    <div className="app">
      <p className="app__text">
        Ce template est bien configuré pour vos applications front-end avec
        Vite, Sass et Vercel
      </p>
      {/* Méthode 1 : on peut donc directement utiliser son nom */}
      <img width={150} height={150} src={dino} alt="" />
      {/* Méthode 2 : après création du dossier "public" à la racine, on peut utiliser le chemin relatif */}
      <img width={150} height={150} src="./assets/trex.png" alt="" />
    </div>
  );
}

export default App;
