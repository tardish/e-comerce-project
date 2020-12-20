
import './App.css';
import { Layout, Row,  Col } from 'antd';



function Footer() {
  const { Footer } = Layout;
  return (
    <Footer >
      <Row justify="center" gutter={[40, 8]}>
        <Col span={3} > Brands</Col>
        <Col span={3} > Company</Col>
        <Col span={3} > Help</Col>
        <Col span={3} > Account</Col>
        <Col span={3} > Social</Col>
      </Row>
      <Row justify="center" gutter={[40, 8]}>
        <Col span={3} >  </Col>
        <Col span={3} > About Us</Col>
        <Col span={3} > Contact Us</Col>
        <Col span={3} > Login</Col>
        <Col span={3} > Facebook</Col>
      </Row>
      <Row justify="center" gutter={[40, 8]}>
        <Col span={3} >  </Col>
        <Col span={3} > Find a Store</Col>
        <Col span={3} > Money Refund</Col>
        <Col span={3} > Register</Col>
        <Col span={3} > Twitter</Col>
      </Row>
      <Row justify="center" gutter={[40, 8]}>
        <Col span={3} >  </Col>
        <Col span={3} > Rules and Terms</Col>
        <Col span={3} > Order Status</Col>
        <Col span={3} > Account Setting</Col>
        <Col span={3} > Instagram</Col>
      </Row>
      <Row justify="center" gutter={[40, 8]}>
        <Col span={3} >  </Col>
        <Col span={3} > Sitemap</Col>
        <Col span={3} >  </Col>
        <Col span={3} > My Orders</Col>
        <Col span={3} > Youtube</Col>
      </Row>
    </Footer>

  );
}

export default Footer;
