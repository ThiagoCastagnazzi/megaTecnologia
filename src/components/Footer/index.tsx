import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    {
      id: 2,
      title: "About Us",
      child: [
        { title: "Contact Us", link: "/" },
        { title: "FAQs", link: "/" },
        { title: "Privacy Policy", link: "/" },
      ],
    },
  ];

  return (
    <section className="footer section">
      <Container className="footer-container">
        <Row className="footer-adress-row">
          <Col>
            <Row>
              <Col>
                <h6 className="text-dark mb-3 address-title">Nosso Endereço</h6>
                <p className="text-muted f-14">
                  R. Walter Hubacher, 1518 - Centro, Nova Andradina - MS,
                  79750-000
                </p>
                <h6 className="text-muted pb-2">
                  Email: atendimento@megatecnologia.net.br
                </h6>
                <a
                  className="whatsapp-link"
                  href="https://web.whatsapp.com/send?phone=5567998304008"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6 className="text-muted pbg-2">WhatsApp: 67 9 9830-4008</h6>
                </a>
                <h6 className="text-muted pbg-2">Telefone: 67 3441-4008</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                2022 © Mega. Design by Thiago Castagnazzi
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
