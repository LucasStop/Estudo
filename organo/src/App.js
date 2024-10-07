import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" />
      <CampoTexto label="cargo" />
      <CampoTexto label="Imagem" />
      <CampoTexto label="Nome" />
    </div>
  );
}

export default App;
