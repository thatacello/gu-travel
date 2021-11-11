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
        <Typography className="title">Tamanhos</Typography>
        <Checkbox className="check" onChange={onChange}>Pequeno (até 4 pessoas)</Checkbox>
        <Checkbox className="check" onChange={onChange}>Médio (até 5 pessoas)</Checkbox>
        <Checkbox className="check" checked onChange={onChange}>Grande (até 5 pessoas )</Checkbox>
        <Checkbox className="check" onChange={onChange}>SUV</Checkbox>
        <Checkbox className="check" onChange={onChange}>Minivan (até 7 pessoas)</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Devoluções</Typography>
        <Checkbox className="check" onChange={onChange}>Devolução no mesmo local</Checkbox>
        <Checkbox className="check" checked onChange={onChange}>Devolução em outro local</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Preço</Typography>
        <Checkbox className="check" onChange={onChange}>Barato</Checkbox>
        <Checkbox className="check" checked onChange={onChange}>Moderado</Checkbox>
        <Checkbox className="check" onChange={onChange}>Sofisticado</Checkbox>
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
