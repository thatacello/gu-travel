import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer } from './styles';

const Header = () => {
  return (
    <MenuContainer>
      <Link to="/aluguel-carros" aria-label="Gu->travel - Experiências">
          Aluguel carros
      </Link>
      <Link to="/hoteis" aria-label="Gu->travel - Hotéis">
          Hotéis
      </Link>
      <Link to="/" aria-label="Gu->travel - Passeios">
          Passeios
      </Link>
      <Link to="/restaurantes" aria-label="Gu->travel - Restaurantes">
          Restaurantes
      </Link>
      <Link to="/" aria-label="Gu->travel - Blog">
          Blog
      </Link>
    </MenuContainer>
  );
};

export default Header;
