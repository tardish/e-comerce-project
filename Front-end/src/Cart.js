import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "./config/axios";
import jwtDecode from "jwt-decode";
import LocalStorageService from "./services/localStorageService";
import "./Cart.css";
import { Layout, Table } from "antd";
import { notification} from "antd";

const { Sider, Content } = Layout;

function Cart() {
  const [dataCart, setDataCart] = useState([]);
  const [userID, setUserID] = useState(0);
  const fetchCart = async () => {
    const httpResponse = await axios.get("/carts/sa");
    setDataCart(httpResponse.data);
  };
  useEffect(() => {
    fetchCart();
    const token = LocalStorageService.getToken();
    if (token) {
      const user = jwtDecode(token);
      setUserID(user.id);
    }
  }, []);

  const Check = () => {
    notification.success({
      message: `Thank for you Payment`,
    });
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "img",
      key: "Product",
      render: (text, record) => (
        <div className="container2">
          <div>
            <img
              src={record.Product.productimage}
              className="iconDetails"
              alt="product"
            />
          </div>
          <div className="div1">{record.Product.productname}</div>
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <div>$ {record.Product.price} </div>,
    },

    {
      title: "CartId",
      key: "id",
      render: (text, record) => (
        <div>
          <button onClick={() => deleteData(record.id)}>Delete </button>
        </div>
      ),
    },
  ];
  const deleteData = async (id) => {
    console.log(id);
    const newData = await axios.delete(`/carts/${id}`);
    fetchCart();
  };
  return (
    <div>
      <Navbar />
      <div class="grid-container">
        <div class="cart-wrapper">
          <Layout>
            <Content className="Lwrapper">
              <div class="Lwrapper-layout">
                <div className="tablelist">
                  <Table
                    columns={columns}
                    dataSource={dataCart}
                    size="small"
                    pagination={{ pageSize: 50 }}
                    scroll={{ y: 500 }}
                  />
                </div>
              </div>
            </Content>
            <Sider className="Rwrapper" theme="light">
              <div>
                <div className="Rwrapper-c">
                  Total price: $
                  {dataCart
                    .map((item) => Number(item.Product.price))
                    .reduce((prev, curr) => prev + curr, 0)}
                </div>
                <div className="Rwrapper-c">Discount:$0</div>
                <div className="Rwrapper-c">Delivery : Free </div>
              </div>
              <div className="Rwrapper-t">
                Total : $
                {dataCart
                  .map((item) => Number(item.Product.price))
                  .reduce((prev, curr) => prev + curr, 0)}{" "}
              </div>
              <button onClick={Check} className="button">
                Check out
              </button>
            </Sider>
          </Layout>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
