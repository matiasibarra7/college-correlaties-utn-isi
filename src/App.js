import './App.css';
import Year from './components/Year/Year'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
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
      <Header />

      <main>
        {/* Cabecera 
        <div style={{ margin: "2rem auto 0"}}>
          <div className="subject-line">
            <div>ID</div>
            <div>Materia</div>
            <div>Regular</div>
            <div>Aprobado</div>
            <div>Reg para cursar</div>
            <div>Apr para cursar</div>
            <div>Para rendir</div>
          </div>
        </div> */}

        {years.map( year => {
          /* console.log(data) */
          return < Year id={year.id} key={"year_" + year.id} infoByYear={data} hs={hs} />
        })}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
