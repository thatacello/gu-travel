import { ContentContainer, Header } from './styles';
import { Typography, Row, Col, Card, Button } from 'antd';
import mandapa from '../../../../assets/images/hotel-mandapa.png';
import shinta from '../../../../assets/images/hotel-shinta.png';
import ikos from '../../../../assets/images/hotel-ikos.png';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <ContentContainer>
      <Header>
        <Typography className="title">Gu recomenda - TOP 3</Typography>
        <Typography className="subtitle">
          Para quem busca uma experiência marcante!
        </Typography>
      </Header>
      <Row className="row" gutter={16}>
        <Col span={8}>
          <Link
            to="/hotel-detalhes"
            aria-label="Gu->travel - Detalhes do Hotel"
          >
            Blog
            <Card
              cover={
                <img
                  alt="Hotel em Mandapa"
                  src={mandapa}
                  style={{ width: '20rem' }}
                />
              }
            >
              <Typography className="card-title">Mandapa</Typography>
              <Typography className="card-subtitle">
                Kedewatan, Indonésia
              </Typography>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link
            to="/hotel-detalhes"
            aria-label="Gu->travel - Detalhes do Hotel"
          >
            <Card
              cover={
                <img
                  alt="Hotel em Shinta"
                  src={shinta}
                  style={{ width: '20rem' }}
                />
              }
            >
              <Typography className="card-title">Shinta Mani Shack</Typography>
              <Typography className="card-subtitle">
                Siem Reap, Camboja
              </Typography>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link
            to="/hotel-detalhes"
            aria-label="Gu->travel - Detalhes do Hotel"
          >
            <Card
              cover={
                <img
                  alt="Hotel em Ikos"
                  src={ikos}
                  style={{ width: '20rem' }}
                />
              }
            >
              <Typography className="card-title">Ikos Olívia</Typography>
              <Typography className="card-subtitle">
                Gerakini, Grécia
              </Typography>
            </Card>
          </Link>
        </Col>
      </Row>
      <Button></Button>
    </ContentContainer>
  );
};

export default Content;
