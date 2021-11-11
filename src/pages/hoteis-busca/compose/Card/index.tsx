import { CardContainer } from './styles';
import { Typography, Image, Card } from 'antd';

const MenuLateral = () => {
  return (
    <CardContainer>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Card>
        <Typography className="title">Nome do lugar</Typography>
        <Typography className="subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          possimus tenetur nam sint maxime quaerat tempore, magni, tempora,
          itaque adipisci voluptates alias dolorem amet? Enim sit officiis est
          aliquid ut. Harum dolor quo minus facilis incidunt? Quasi hic cum eum
          obcaecati culpa ut iure saepe, est quidem vel tempora nobis quam sit
          deleniti ratione nulla numquam perspiciatis natus exercitationem nemo!
        </Typography>
        <Typography className="small">
          Adress
        </Typography>
      </Card>
    </CardContainer>
  );
};

export default MenuLateral;
