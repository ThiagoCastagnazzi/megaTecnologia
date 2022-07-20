import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative" id="home">
      <Container className="container-section">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Mega Tecnologia
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Referência de Energia Solar em{" "}
                <span className="text-primary font-weight-medium">
                  Mato Grosso do Sul
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Somos uma empresa de integração de tecnologias, voltada para o
                fornecimento de soluções e do que há de mais moderno para
                residências, escritórios, empresas privadas e órgãos públicos.
              </p>
              <a href="#" className="btn btn-warning">
                Saiba Mais <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/home-mega.png"
              alt="Mega Foto"
              width={600}
              height={350}
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
