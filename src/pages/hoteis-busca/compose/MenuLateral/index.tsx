import { Col, Container, Row, Small } from './styles';
import { Typography, Checkbox, Input } from 'antd';

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
      </Col>
    </Container>
  );
};

export default MenuLateral;
