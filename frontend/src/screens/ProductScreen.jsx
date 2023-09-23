import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const [product, setproduct] = useState([]);

  const { id: productID } = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${productID}`);
    setproduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>Price</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type="button"
                  className="btn-block w-100"
                  variant="dark"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
