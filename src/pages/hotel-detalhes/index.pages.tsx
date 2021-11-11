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
  ReserveButton,
  RightContent,
  Row,
} from './styles';
import heart from '../../assets/icons/heart.svg';
import send from '../../assets/icons/send.svg';
import {
  Carroussel,
  Comments,
  HotelRate,
  Maps,
  OQueFazer,
  Reserve,
  Sobre,
} from './compose';

export default function HotelDetalhes() {
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
              <OQueFazer />
              <Sobre />
            </LeftContent>
            <RightContent>
              <Typography className="title">
                Reserve pelas plataformas:
              </Typography>
              <Reserve />
              <Reserve />
              <Reserve />
              <ReserveButton>Ver mais plataformas</ReserveButton>
              <HotelRate />
              <Typography className="title">Já visitou esse hotel?</Typography>
              <Comments />
            </RightContent>
          </Content>
        </Col>
      </Main>
      <Footer />
    </>
  );
}
