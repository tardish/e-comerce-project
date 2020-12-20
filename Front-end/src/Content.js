
import Image1 from './content/Image';
import Image2 from './content/Image2';
import Phone from './content/phone';
import Bestsell from './content/Bestsell';
import { Row, Col } from 'antd';


function Content() {
  return (
    <Row>
      <Col span={16} offset={4}>
        <Image1 />
        <Bestsell />
        <Image2 />
        <Phone />
      </Col>
    </Row>
  );
}

export default Content;




