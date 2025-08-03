import Img111 from '../assets/images (1).png'
import Image from '../components/Image';

const HomePage = () => {
  const arr = ["", "", ""]
  return (
    <div>
      <div>React React DOM With Header</div>
      <Image src={Img111} />
      <Image src='/test-image.png' />
    </div>
  );
};

export default HomePage;
