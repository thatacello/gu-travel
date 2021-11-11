import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { Col, Container, Row } from './styles';
import { Image } from 'antd';
import events from '../../../../assets/images/oquefazer1.png';
import cook from '../../../../assets/images/oquefazer2.png';
import parks from '../../../../assets/images/oquefazer3.png';
import museums from '../../../../assets/images/oquefazer4.png';

const OQueFazer = () => {
  return (
    <Container>
      <Typography>O que fazer pela região:</Typography>
      <Row>
        <Col>
          <Image src={events} />
          <Typography>Eventos próximos</Typography>
        </Col>
        <Col>
          <Image src={cook} />
          <Typography>Culinária</Typography>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={parks} />
          <Typography>Parques</Typography>
        </Col>
        <Col>
          <Image src={museums} />
          <Typography>Museus</Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default OQueFazer;
