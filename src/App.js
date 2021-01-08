import mati from './mati.png';
import './App.css';
import Year from './components/Year'
import data from "./data/data.json";


function App() {

  let hs = {
    amount: 0
  }

  const years = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <figure style={{ position: 'absolute', top: "-0.5rem", right:"1.5rem"}}>
          <img src={mati} className="App-logo" alt="logo" style={{ width:"120px", height: "123px", borderRadius: "50%" }} />
        </figure>
      </header>

      <main>
        {/* Cabecera */}
        <div style={{ maxWidth: "1530px", margin: "0 auto"}}>
          <div className="subject-line">
            <div>ID</div>
            <div>Materia</div>
            <div>Regular</div>
            <div>Aprobado</div>
            <div>Reg para cursar</div>
            <div>Apr para cursar</div>
            <div>Para rendir</div>
          </div>
        </div>

        {years.map( year => {
          /* console.log(data) */
          return < Year id={year.id} key={"year_" + year.id} infoByYear={data} hs={hs} />
        })}
      </main>
    </div>
  );
}

export default App;
