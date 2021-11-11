import { Typography } from 'antd';
import { InputHeader } from '../../components';
import { Col, Content, Icon, IconContainer, LeftContent, RightContent, Row } from './styles';
import heart from '../../assets/icons/heart.svg';
import send from '../../assets/icons/send.svg';
import { Carroussel } from './compose';

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
            </LeftContent>
            <RightContent>

            </RightContent>
        </Content>
      </Col>
    </>
  );
}
