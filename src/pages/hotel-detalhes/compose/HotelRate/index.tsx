import { Rate, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Card, Col, Container, Icon, Row } from './styles';
import booking from '../../../../assets/images/logo-booking.png';

const HotelRate = () => {
  return (
    <Container>
      <Col>
        <Row>
          <Typography>
            4,9 <Rate disabled defaultValue={4.9} />
          </Typography>
        </Row>
        <Icon src={booking} />
        <Col>
          <button>Ver oferta</button>
        </Col>
      </Col>
    </Container>
  );
};

export default HotelRate;
