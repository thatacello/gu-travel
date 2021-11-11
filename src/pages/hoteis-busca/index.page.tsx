import { Typography } from 'antd';
import { Footer, Header, InputHeader, Menu } from '../../components';
import { Col, Content, Icon, IconContainer, Row } from './styles';
import heart from '../../assets/icons/heart.svg';
import send from '../../assets/icons/send.svg';
import { Card, MenuLateral } from './compose';

export default function HoteisBusca() {
  return (
    <>
      <Header />
      <Menu />
      <InputHeader />
      <Col>
        <Row>
          <Typography>Nome da cidade</Typography>
          <IconContainer>
            <Icon src={heart}></Icon>
            <Icon src={send}></Icon>
          </IconContainer>
        </Row>
        <Content>
          <MenuLateral />
          <Card />
        </Content>
      </Col>
      <Footer />
    </>
  );
}
