import "./App.css";
import ListaContatos from "./componentes/listaConta";
import Titulo from "./componentes/Titulo"; 
import EditorDeItem from "./componentes/editordeIten";
import { useSelector } from "react-redux";



function App() {

  const itemEditando=useSelector((state)=>state.Lista.itemEditando)

  return (
    <div className="App">
      <Titulo/> 
      <EditorDeItem modo={itemEditando?"editar":"adicionar"}/>
      <ListaContatos/>
    </div>
  );
}

export default App;
