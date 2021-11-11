import { Col, Container, Row, Small } from './styles';
import { Typography, Checkbox, Input, Rate } from 'antd';
import 'antd/dist/antd.css';

function onChange(e: any) {
  console.log(`checked = ${e.target.checked}`);
}

const MenuLateral = () => {
  return (
    <Container>
      <Col>
        <Typography className="title">Comodidades</Typography>
        <Checkbox onChange={onChange}>Estacionamento</Checkbox>
        <Checkbox onChange={onChange}>Café da manhã</Checkbox>
        <Checkbox onChange={onChange}>Ar condicionado</Checkbox>
        <Checkbox onChange={onChange}>Perto da praia</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Tipos de acomodações</Typography>
        <Checkbox onChange={onChange}>Hostel ou Albergue</Checkbox>
        <Checkbox onChange={onChange}>Pousada</Checkbox>
        <Checkbox onChange={onChange}>Hotel</Checkbox>
        <Checkbox onChange={onChange}>Resort</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Preço por diária</Typography>
        <Row>
          <Input className="price" />
          <Small>até</Small>
          <Input className="price" />
        </Row>
      </Col>
      <Col>
        <Typography className="title">Pontuação dos travellers</Typography>
        <Rate disabled defaultValue={4} />
        <Rate disabled defaultValue={3} />
        <Rate disabled defaultValue={2} />
      </Col>
    </Container>
  );
};

export default MenuLateral;
