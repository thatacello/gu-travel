import { InputHeader } from '../../../../components';
import { BannerContainer } from './styles';
import bg from '../../../../assets/images/inicio.png';

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bg})` }}>
      <InputHeader />
    </BannerContainer>
  );
};

export default Banner;
