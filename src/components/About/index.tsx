import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                Quem <span className="text-warning">Somos</span>
              </h3>
              <p className="text-muted">
                Somos uma empresa de integração de tecnologias, voltada para o
                fornecimento de soluções e do que há de mais moderno para
                residências, escritórios, empresas privadas e órgãos públicos.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              INTEGRAÇÃO DE TECNOLOGIAS
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <p className="text-muted font-weight-light">
                  Há 15 anos no mercado, contamos com uma equipe preparada nas
                  áreas comercial, técnica e de desenvolvimento, voltada a
                  criar, implementar e dar suporte de acordo com suas
                  necessidades.
                </p>
              </Col>
              <Col md={6}>
                <p className="text-muted font-weight-light">
                  Com muita satisfação, apresentamos esse portfólio de serviços
                  e produtos e nos colocamos à disposição para prestarmos um
                  serviço de qualidade e responsabilidade à sua empresa ou
                  residência.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
