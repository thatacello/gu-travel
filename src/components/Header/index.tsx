import React from 'react';
import { HeaderContainer } from './styles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" aria-label="Gu->travel - Home">
        <Logo />
      </Link>
      <Link to="/login" aria-label="Gu->travel - Login">
        <button className="login">
          Fazer login
        </button>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
