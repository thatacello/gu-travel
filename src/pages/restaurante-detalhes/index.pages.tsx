import { Typography } from 'antd';
import { Footer, InputHeader } from '../../components';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import {
  Col,
  Content,
  Icon,
  IconContainer,
  LeftContent,
  Main,
  RightContent,
  Row,
} from './styles';
import heart from '../../assets/icons/heart.svg';
import send from '../../assets/icons/send.svg';
import {
  Carroussel,
  Comments,
  Maps,
  RestauranteRate,
} from './compose';

export default function RestauranteDetalhes() {
  return (
    <>
      <Header />
      <Menu />
      <InputHeader />
      <Main>
        <Col>
          <Row>
            <Typography>Nome da cidade</Typography>
            <IconContainer>
              <Icon src={heart}></Icon>
              <Icon src={send}></Icon>
            </IconContainer>
          </Row>
          <Content>
            <LeftContent>
              <Carroussel />
              <Maps />
            </LeftContent>
            <RightContent>
              <RestauranteRate />
              <Typography className="title">Já visitou esse local?</Typography>
              <Comments />
            </RightContent>
          </Content>
        </Col>
      </Main>
      <Footer />
    </>
  );
}
