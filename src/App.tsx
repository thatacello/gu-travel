import Home from './pages/home/index.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Hoteis from './pages/hoteis/index.page';
import HoteisBusca from './pages/hoteis-busca/index.page';
import { Main } from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteis" element={<Hoteis />} />
          <Route path="/hoteis-busca" element={<HoteisBusca />} />
        </Routes>
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

export default App;
