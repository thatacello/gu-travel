import { Rate, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Box, Col, Container, Icon, Row } from './styles';
import pin from '../../../../assets/icons/pin-icon.png';
import park from '../../../../assets/icons/park-icon.png';
import wifi from '../../../../assets/icons/wifi-icon.png';

const HotelRate = () => {
  return (
    <Container>
      <Col>
        <Row>
          <Typography className="rate">
            4,9 <Rate disabled defaultValue={5} />
          </Typography>
        </Row>
        <Row>
          <Box>
            <Icon src={pin} />
          </Box>
          <Typography className="description">
            Rua xxxxxx, 450 - Saude - 04294-000
          </Typography>
        </Row>
        <Typography className="title">O que o local oferece:</Typography>
        <Row>
          <Box>
            <Icon src={park} />
          </Box>
          <Typography className="description">
            Estacionamento gratuito
          </Typography>
        </Row>
        <Row>
          <Box>
            <Icon src={wifi} />
          </Box>
          <Typography className="description">Wi-Fi gratuito</Typography>
        </Row>
        <br />
        <Typography className="title-second">Pratos principais</Typography>
        <br />
        <ul>
        <li><Typography className="description">Wi-Fi gratuito</Typography></li>
        <li><Typography className="description">Lorem ipsum dolor sit amet.</Typography></li>
        <li><Typography className="description">Lorem, ipsum dolor.</Typography></li>
        <li><Typography className="description">Lorem ipsum dolor sit.</Typography></li>
        <li><Typography className="description">Lorem ipsum dolor sit amet consectetur.</Typography></li>
        <li><Typography className="description">Lorem ipsum dolor sit amet, consectetur adipisicing.</Typography></li>
        <li><Typography className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography></li>
        </ul>
      </Col>
    </Container>
  );
};

export default HotelRate;
