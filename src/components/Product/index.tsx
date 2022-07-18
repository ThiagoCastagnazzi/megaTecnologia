import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "reactstrap";
const ProdutoBox = (props: any) => {
  return (
    <>
      {props.products.map((produto: any, key: any) =>
        produto.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              produto.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <Image
                  src={produto.img}
                  alt={produto.title}
                  width={400}
                  height={168}
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={produto.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {produto.title}
                </h5>
                <p className="text-muted mb-3 f-15">{produto.desc}</p>
                <a href={produto.link} className="f-16 text-warning">
                  Saiba Mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {produto.title}
                </h5>
                <p className="text-muted mb-3 f-15">{produto.desc}</p>
                <a href={produto.link} className="f-16 text-warning">
                  Saiba Mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <Image
                  src={produto.img}
                  alt={produto.title}
                  width={400}
                  height={168}
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Produto = () => {
  const products = [
    {
      id: 1,
      img: "/images/products/moveis.jpg",
      title: "Informática",
      desc: "Computadores, Mouses, Teclados, Fones de Ouvidos, WebCam, Cabos HDMI e VGA, Conversores e muito mais.",
      link: "/",
    },
    {
      id: 2,
      img: "/images/products/moveis.jpg",
      title: "Infraestrutura de Rede",
      desc: "Roteadores, Repetidores, Antenas, Switchs e muito mais.",
      link: "/",
    },
    {
      id: 3,
      img: "/images/products/moveis.jpg",
      title: "Móveis para Escritório",
      desc: "Cadeiras, Mesas, Armários, Cofres e muito mais.",
      link: "/",
    },
  ];
  return (
    <section className="section" id="product">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Produtos</span>
              </h3>
              <p className="text-muted">
                Oferemos produtos de ótima qualidade e de última geração.
              </p>
            </div>
          </Col>
        </Row>
        <ProdutoBox products={products} />
      </Container>
    </section>
  );
};
export default Produto;
