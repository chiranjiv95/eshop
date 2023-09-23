import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product, index) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default HomeScreen;
