import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './styles/theme';
import 'antd/dist/antd.css';
import Home from './pages/home/index.page';
import Hoteis from './pages/hoteis/index.page';
import HoteisBusca from './pages/hoteis-busca/index.page';
import HotelDetalhes from './pages/hotel-detalhes/index.pages';
import Login from './pages/login/index.pages';
import Cadastro from './pages/cadastro/index.pages';
import AluguelCarros from './pages/aluguel-carros';
import Restaurantes from './pages/restaurantes/index.pages';
import RestauranteDetalhes from './pages/restaurante-detalhes/index.pages';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteis" element={<Hoteis />} />
          <Route path="/hoteis-busca" element={<HoteisBusca />} />
          <Route path="/hotel-detalhes" element={<HotelDetalhes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/aluguel-carros" element={<AluguelCarros />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/restaurante-detalhes" element={<RestauranteDetalhes />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
