import 'antd/dist/antd.css';
import Carousel from 'react-bootstrap/Carousel';
import restaurante1 from '../../../../assets/images/restaurante1.jpeg';
import restaurante2 from '../../../../assets/images/restaurante2.jpeg';
import restaurante3 from '../../../../assets/images/restaurante3.jpeg';
import { Container } from './styles';

const Carroussel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={restaurante1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={restaurante2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={restaurante3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carroussel;
