import 'antd/dist/antd.css';
import { Container, Iframe } from './styles';

const Maps = () => {
  return (
    <Container
      id="map-container-google-1"
      className="z-depth-1-half map-container my-4 mx-2"
    >
      <Iframe src="https://maps.google.com/maps?q=puntacana&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </Container>
  );
};

export default Maps;
