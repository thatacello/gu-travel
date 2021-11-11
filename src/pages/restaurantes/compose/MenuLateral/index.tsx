import { Col, Container } from './styles';
import { Typography, Checkbox, Rate } from 'antd';
import 'antd/dist/antd.css';

function onChange(e: any) {
  console.log(`checked = ${e.target.checked}`);
}

const MenuLateral = () => {
  return (
    <Container>
      <Col>
        <Typography className="title">Tipos</Typography>
        <Checkbox className="check" onChange={onChange}>Restaurantes</Checkbox>
        <Checkbox className="check" checked onChange={onChange}>Docerias</Checkbox>
        <Checkbox className="check" onChange={onChange}>Bares</Checkbox>
        <Checkbox className="check" onChange={onChange}>Cafés e chás</Checkbox>
        <Checkbox className="check" onChange={onChange}>Fast food</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Restrições alimentares</Typography>
        <Checkbox className="check" onChange={onChange}>Veganas</Checkbox>
        <Checkbox className="check" checked onChange={onChange}>Vegetarianas</Checkbox>
        <Checkbox className="check" onChange={onChange}>Sem glutén</Checkbox>
      </Col>
      <Col>
        <Typography className="title">Preço por diária</Typography>
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
