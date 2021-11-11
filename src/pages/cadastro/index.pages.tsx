import { Button, ContainerCadastro, Content, Icon, Input } from './styles';
import bg from '../../assets/images/login-foto.png';
import logo from '../../assets/logo/logo.svg';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  return (
    <ContainerCadastro>
      <Content>
        <Link to="/" aria-label="Gu->travel - Home">
          <Icon src={logo} />
        </Link>
        <Typography className="title">Cadastre-se</Typography>
        <Typography className="fields">Nome</Typography>
        <Input className="inputField"></Input>
        <Typography className="fields">Data de nascimento</Typography>
        <Input className="inputField"></Input>
        <Typography className="fields">E-mail</Typography>
        <Input className="inputField"></Input>
        <Typography className="fields">Telefone</Typography>
        <Input className="inputField"></Input>
        <Typography className="fields">Endereço</Typography>
        <Input className="inputField"></Input>
        <Typography className="fields">Senha</Typography>
        <Input className="inputField" type="password"></Input>
        <Button className="cadastrar">Cadastrar</Button>
        <Typography className="text-bottom">
            Já é cadastrado?{' '}
            <Link to="/login" aria-label="Gu->travel - Login">
              Faça seu login!
            </Link>
          </Typography>
      </Content>
    </ContainerCadastro>
  );
};

export default Cadastro;
