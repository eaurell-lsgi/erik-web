import { Navbar } from './navbar';
import './pagina2.css';

const Pagina2 = () => {
  return (
    <div className="Contingut">
      <Navbar />
      <h1>Personajes del GTA V</h1>

      <div className="personaje">
        <h3>Franklin Clinton</h3>
        <img src="./franklin.jpg" alt="Franklin Clinton" />
        <p>
          Franklin Clinton es uno de los tres protagonistas jugables de Grand Theft Auto V. 
          Originario de Los Santos, Franklin es un joven ambicioso que comienza su carrera en el crimen 
          trabajando con el veterano Michael De Santa. A pesar de estar rodeado por una vida de delincuencia, 
          Franklin desea escapar de su entorno y alcanzar un futuro mejor, pero siempre se ve arrastrado 
          de nuevo a situaciones peligrosas.
        </p>
      </div>

      <div className="personaje">
        <h3>Michael De Santa</h3>
        <img src="/Michael-desanta.webp"alt="Michael De Santa" />
        <p>
          Michael De Santa, nacido Michael Townley, es un hombre que se retiró del crimen después de un 
          robo fallido años antes. Es un personaje complejo, atrapado entre su vida de lujo y una familia disfuncional. 
          Aunque aparentemente tiene todo lo que necesita, siente que le falta emoción y propósito, lo que lo lleva a 
          regresar al mundo del crimen. Michael busca redención, pero sus propios errores siempre lo siguen.
        </p>
      </div>

      <div className="personaje">
        <h3>Trevor Philips</h3>
        <img src="trevor.webp" alt="Trevor Philips" />
        <p>
          Trevor Philips es el amigo más inestable y peligroso de Michael. Es un ex-militar con un carácter 
          impulsivo, caótico y extremadamente violento. Trevor vive en el desierto de Blaine County, donde maneja 
          una operación criminal y se enfrenta a las autoridades sin pensarlo dos veces. A pesar de su locura y 
          su comportamiento impredecible, Trevor tiene una lealtad feroz hacia aquellos que considera sus amigos.
        </p>
      </div>
    </div>
  );
}

export default Pagina2;
