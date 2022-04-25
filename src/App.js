import './App.css';
import { ContenidoBody } from './components/ContenidoBody';
import { ContenidoHeader } from './components/ContenidoHeader';
import {Body, Contenedor, Header} from './theme/theme'

function App() {
  return (
    <>
      <Contenedor>
        <Header>
          <ContenidoHeader/>
        </Header>
        <Body>
          <ContenidoBody>

          </ContenidoBody>
        </Body>
      </Contenedor>
    </>
  );
}


export default App;
