
import { Carousel, Image  } from 'antd';

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  width:'100%'
};
const Ca = {
  height: '300px',
  textAlign: 'center',
  width:'100%',
  margin:'20px'
};

function Image1() {
  return (
    <Carousel autoplay style={Ca}>
      <div >
        <Image  style={contentStyle}
          src="https://cf.shopee.co.th/file/1d40aa5739da2a69faa763ca92818873"
        />
      </div>
      <div >
        <Image  style={contentStyle}
          src="https://cf.shopee.co.th/file/b41c73c0ac3bdc39bf013f7e48370b6b"
        />
      </div>
      <div >
        <Image  style={contentStyle}
          src="https://cf.shopee.co.th/file/55a19877377c970c17eced040a724491"
        />
      </div>
      <div >
        <Image  style={contentStyle}
          src="https://cf.shopee.co.th/file/ad0076c3d68fdf9e27221cc41e6e1182"
        />
      </div>
    </Carousel>

  );
}

export default Image1;




