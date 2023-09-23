import React from "react";
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
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id: productID } = useParams();

  const product = products.find((p) => p._id === productID);

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
