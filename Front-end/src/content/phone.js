import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd';
import './Phone.css';
import { Link } from 'react-router-dom'


export default function Phone() {
  const [proDuct, setProduct] = useState([])
  const fetchProduct = async () => {
    const httpResponse = await axios.get("http://localhost:8000/products");
    setProduct(httpResponse.data);
  };
  useEffect(() => { fetchProduct(); }, []);

  return (

    <Row justify="center" className='con' >
      <Row justify="center" gutter={[48, 32]} >

        {proDuct.filter(product => product.id <= 5).map(product => (
          <div key={product.id}>
            <Col ><Card
              className="card"
              cover={
                <img alt="example" className="pic"
                  src={product.productimage} />}
              actions={[<Link to={"product/"+product.id}><div >{product.productname}</div>{product.price}</Link>]}>
            </Card>
            </Col>
          </div>))}

      </Row>
    </Row>

  )
}