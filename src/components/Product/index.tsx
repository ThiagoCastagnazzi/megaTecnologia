import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

type ProductProps = {
  title: string;
  img: string;
  id: number;
};

const Produto = () => {
  const products = [
    {
      id: 1,
      img: "/images/products/COMPUTADORES.png",
      title: "Computadores",
    },
    {
      id: 2,
      img: "/images/products/HARDWARE.png",
      title: "Hardware",
    },
    {
      id: 3,
      img: "/images/products/PERIFERICOS.png",
      title: "Periféricos",
    },
    {
      id: 4,
      img: "/images/products/IMPRESSORA.png",
      title: "Impressoras",
    },
    {
      id: 5,
      img: "/images/products/CONECTIVIDADE.png",
      title: "Conectividade",
    },

    {
      id: 6,
      img: "/images/products/TELEFONIA-FIXA.png",
      title: "Telefones",
    },
    {
      id: 7,
      img: "/images/products/CFTV.png",
      title: "CFTV",
    },

    {
      id: 8,
      img: "/images/products/ESCRITORIO.png",
      title: "Móveis para Escritório",
    },
  ];
  return (
    <section className="section" id="product">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-primary">Produtos</span>
              </h3>
              <p className="text-muted">
                Oferemos produtos de ótima qualidade e de última geração.
              </p>
            </div>
          </Col>
        </Row>
        <Container className="card-container">
          {products.map((product: ProductProps) => (
            <Card key={product.id}>
              <CardBody>
                <CardTitle>{product.title}</CardTitle>
                <Image
                  src={product.img}
                  alt={product.title}
                  width={210}
                  height={132}
                  quality={100}
                />
              </CardBody>
            </Card>
          ))}
        </Container>
      </Container>
    </section>
  );
};

export default Produto;
