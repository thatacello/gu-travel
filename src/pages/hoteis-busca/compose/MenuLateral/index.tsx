import { Col, Container } from './styles';
import { Typography, Checkbox } from 'antd';

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
    </Container>
  );
};

export default MenuLateral;
