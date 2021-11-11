import { Icon, InputContainer, Content } from './styles';
import { Divider, Input } from 'antd';
import calendar from '../../assets/icons/calendar.svg';
import user from '../../assets/icons/user.svg';
import search from '../../assets/icons/search.svg';
import { Link } from 'react-router-dom';

const InputHeader = () => {
  return (
    <>
      <InputContainer>
        <Content>
          <Input className="destino" placeholder="Nome do hotel ou destino" />
          <Divider type="vertical" />
          <Icon src={calendar} />
          <Input className="checkin" placeholder="Check-in - Check-out" />
          <Divider type="vertical" />
          <Icon src={user} />
          <Input className="hospedes" placeholder="2 hóspedes" />
          <Link to="/hoteis-busca" aria-label="Gu->travel - Pesquisar Hotéis">
            <Icon className="search" src={search} />
          </Link>
        </Content>
      </InputContainer>
    </>
  );
};

export default InputHeader;
