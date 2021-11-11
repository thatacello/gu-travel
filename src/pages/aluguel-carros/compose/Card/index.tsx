import { CardContainer } from './styles';
import { Typography, Card } from 'antd';
import car from '../../../../assets/images/car.png';

const MenuLateral = () => {
  const { Meta } = Card;
  return (
    <CardContainer>
      <Card className="card-car"
        hoverable
        cover={
          <img
            alt="Aluguel de carro"
            src={car}
          />
        }
      >
        <Typography className="title">Volkswagem Up</Typography>
        <Typography></Typography>
        <Meta title="2 portas - 4 assentos - 2 bagagens" description="www.localiza.com" />
      </Card>
    </CardContainer>
  );
};

export default MenuLateral;
