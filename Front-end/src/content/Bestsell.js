import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Divider, Card } from 'antd';
import './Phone.css';
import { Link } from 'react-router-dom'



export default function Bestsell() {
  const [proDuct, setProduct] = useState([])
  const fetchProduct = async () => {
    const httpResponse = await axios.get("/products");
    setProduct(httpResponse.data);
  };
  useEffect(() => { fetchProduct(); }, []);
  return (
    <div>
      <Divider orientation="left">Best seller</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {proDuct.filter(product => (product.id>4&&product.id <=9)).map(product => (
          <div key={product.id}>
            <Col  className="gutter-row" span={6}><Card
              className="card"
              cover={
                <img alt="example" className="pic"
                  src={product.productimage} />}
              actions={[<Link to={"product/"+product.id}><div >{product.productname}</div>{product.price}</Link>]}>
            </Card>
            </Col>
          </div>))}
      </Row>
    </div>

  );
}

 