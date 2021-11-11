import { Typography } from 'antd';
import { InputHeader } from '../../components';
import {
  Col,
  Content,
  Icon,
  IconContainer,
  LeftContent,
  ReserveButton,
  RightContent,
  Row,
} from './styles';
import heart from '../../assets/icons/heart.svg';
import send from '../../assets/icons/send.svg';
import { Carroussel, HotelRate, Maps, OQueFazer, Reserve, Sobre } from './compose';

export default function HotelDetalhes() {
  return (
    <>
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
          </RightContent>
        </Content>
      </Col>
    </>
  );
}
