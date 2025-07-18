import "./App.css";
import Header from "./components/Header";
import Agenda from "./components/Agenda";
import Engajamento from "./components/Engajamento";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="containertudo">
        <div className="containercentro">
          <Agenda></Agenda>
          <Engajamento></Engajamento>
          <Rodape></Rodape>
        </div>
      </div>
    </div>
  );
}

export default App;
