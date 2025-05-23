import { Navbar } from './navbar'

const Erik = () => {
  return (
    <div className="App">
      <Navbar />
      <h2>Mapa del joc</h2>
      <div className='mapa'>
        <iframe 
        src ="https://gta-5-map.com/"
        width="100%"
        height="100%"
        title='Mapa'
        />
      </div>
    </div>
  );
}

export default Erik;

