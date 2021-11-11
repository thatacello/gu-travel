import { InputHeader } from '../../../../components';
import { BannerContainer } from './styles';
import bg from '../../../../assets/images/hotel-bg.png';
import { Typography } from 'antd';

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bg})` }}>
      <Typography className="title">
        Quanto mais detalhes melhor sua busca!
      </Typography>
      <InputHeader />
    </BannerContainer>
  );
};

export default Banner;
