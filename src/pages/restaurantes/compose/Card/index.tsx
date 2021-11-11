import { CardContainer } from './styles';
import { Typography, Card, Rate } from 'antd';
import burguer from '../../../../assets/images/hamburguer.jpeg';
import { Link } from 'react-router-dom';

const MenuLateral = () => {
  const { Meta } = Card;
  return (
    <CardContainer>
      <Link to="/restaurante-detalhes" aria-label="Gu->travel - Detalhes">
        <Card
          className="card-car"
          hoverable
          cover={
            <img
              alt="Aluguel de carro"
              src={burguer}
              style={{ width: '14rem' }}
            />
          }
        >
          <Typography className="title">Mr Club House</Typography>
          <Meta title="Fast Food" description="$$$" />
          <Rate disabled defaultValue={3} />
        </Card>
      </Link>
    </CardContainer>
  );
};

export default MenuLateral;
