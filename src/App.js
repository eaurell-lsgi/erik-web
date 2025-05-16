import logo from './gtav.avif';
import './App.css';
import { Navbar } from './navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Grand theft Auto V</h1>
        <p></p>
      </header>

      <section className="Historia del joc">
        <h2>La Historia de GTA V</h2>
        <p>
          Grand Theft Auto V (GTA V) es un videojuego de acción y aventura desarrollado por Rockstar Games. Ambientado en la ficticia ciudad de Los Santos, basada en Los Ángeles, el juego sigue las historias entrelazadas de tres protagonistas: Michael De Santa, Franklin Clinton y Trevor Philips. 
          La trama de GTA V se centra en las vidas de estos tres personajes, cada uno con sus propios objetivos y pasados complicados. A lo largo del juego, los jugadores pueden alternar entre los tres personajes mientras se embarcan en una serie de robos, persecuciones y confrontaciones con el crimen organizado y las autoridades.
        </p>

        <h3>Conflictos y Temáticas</h3>
        <p>
          La historia aborda temas como la corrupción, la traición, el crimen organizado y las relaciones personales rotas. Además, el juego ofrece una crítica a la sociedad moderna, explorando el consumismo, la fama y la decadencia de la vida urbana en Los Santos.
        </p>
      </section>

  
      <section className="info">
        <h2>Información Adicional</h2>
        <li>
          Fecha de lanzamiento: 17 de septiembre de 2013.
        </li>
        <li>
          Desarrollador: Rockstar North.
        </li>
        <li>
          Plataformas: Disponible para PlayStation 3, Xbox 360, PlayStation 4, Xbox One, PC y PlayStation 5 (versión actualizada).
        </li>
        <li>
          Modos de juego: El juego incluye un modo Historia, donde los jugadores siguen la narrativa de los tres personajes principales, y un modo GTA Online, que permite jugar de manera cooperativa o competitiva con otros jugadores en línea.
        </li>
        <li>
          GTA V se ha mantenido como uno de los juegos más vendidos y populares de todos los tiempos, con millones de jugadores alrededor del mundo y una comunidad activa en GTA Online.
        </li>
      </section>
    </div>
  );
}


export default App;

