import "./App.css";
import Botoes from "./componentes/Botoes";
import ListaContatos from "./componentes/listaConta";
import Titulo from "./componentes/Titulo"; 



function App() {
  return (
    <div className="App">
      <Titulo /> 
      <ListaContatos/>
      <Botoes/> 
    </div>
  );
}

export default App;
