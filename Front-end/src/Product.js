import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from './config/axios'
import "./App.css";
import { useParams ,withRouter} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import LocalStorageService from "./services/localStorageService";
import { notification} from "antd";

 function Product(props) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [userID,setUserID] = useState(0);
  const { id } = useParams();
  const fetchProduct = async () => {
    const httpResponse = await axios.get("/products");
    setData(httpResponse.data);
  };
  useEffect(() => {
    fetchProduct();
    const token = LocalStorageService.getToken();
    if(token) {
      const user = jwtDecode(token);
      setUserID(user.id);
    }
  }, []);
 
  const addcart = () => {
    const dataCart = {
      quantity:count,
      totalprice:total,
      product_id:Number(id),
    }
    console.log(dataCart);
    axios.post("/carts", dataCart)
    .then(res => {
      notification.success({
        message: `Cart add success` ,
      });
      props.history.push("/cart");
    })
    .catch(err => {
      notification.error({
        message: ` Cart add failed` ,
      });
    })
  };

  return (
    <div>
      <Navbar />
      {data
        .filter((product) => product.id == `${id}`)
        .map((product) => (
          <div key={product.id}>
            <div className="Pro-content">
              <div className="Pro-wrapper">
                <img
                  src={product.productimage}
                  alt="Product"
                  className="productPic"
                />
                <div className="productDe">
                  <div class="productName">{product.productname}</div>
                  <div class="productDes">{product.Descriptions}</div>
                  <div class="productPrice">
                    ${product.price}
                    <div>
                      <label for="quantity">Quantity</label>
                      <br />
                      <button
                        onClick={() => {
                          if (count < product.stock) {
                            setCount(count + 1);
                            setTotal((count + 1) * product.price);
                          }
                        }}
                      >
                        +
                      </button>
                      <input
                        className="inputQ"
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={count}
                      />
                      <button
                        onClick={() => {
                          if (count > 0) {
                            setCount(count - 1);
                            setTotal((count - 1) * product.price);
                          }
                        }}
                      >
                        -
                      </button>
                      <input
                        className="inputP"
                        id="total"
                        name="total"
                        value={count * product.price}
                      />
                      <button
                        className="Buttons"
                        type="submit"
                        onClick={() => {
                          addcart();
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default withRouter(Product);