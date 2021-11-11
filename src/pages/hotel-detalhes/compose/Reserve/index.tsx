import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { Card, Col, Container, Icon } from './styles';
import booking from '../../../../assets/images/logo-booking.png';

const Sobre = () => {
  return (
    <Container>
      <Col>
        <Card>
          <Icon src={booking} />
          <Col>
            <Typography>RS 289</Typography>
            <button>Ver oferta</button>
          </Col>
        </Card>
      </Col>
    </Container>
  );
};

export default Sobre;
