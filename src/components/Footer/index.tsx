import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo-rosa.svg';
import { Content, FooterContainer, Small } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/" aria-label="Gu->travel - Home">
        <Logo />
      </Link>
      <Content>
        <Link to="/" aria-label="Gu->travel - Home">
          Política de cookies
        </Link>
        <Link to="/" aria-label="Gu->travel - Home">
          Termos de uso
        </Link>
        <Link to="/" aria-label="Gu->travel - Home">
          A Gu travel
        </Link>
        <Link to="/" aria-label="Gu->travel - Home">
          Mapa do site
        </Link>
      </Content>
      <Small>2021, Gu Travell. Todos os direitos reservados.</Small>
    </FooterContainer>
  );
};

export default Footer;
