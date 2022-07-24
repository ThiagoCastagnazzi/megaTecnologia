import Image from "next/image";
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
    <section className="footer section" id="contact">
      <Container className="footer-container">
        <Row className="footer-adress-row">
          <Col>
            <Row>
              <Col>
                <h6 className="text-dark mb-3 address-title">Nosso Endereço</h6>
                <div className="footer-address">
                  <Image
                    src="/icons/icon-address.png"
                    width={50}
                    height={50}
                    alt="Endereço"
                  />
                  R. Walter Hubacher, 1518 - Centro, Nova Andradina - MS,
                  79750-000
                </div>
                <ul className="contact-list">
                  <li>
                    <a
                      className="contact-list-link text-muted f-14"
                      href="mailto: atendimento@megatecnologia.net.br"
                    >
                      <Image
                        src="/icons/icon-email.png"
                        width={30}
                        height={30}
                        alt="Email"
                      />
                      atendimento@megatecnologia.net.br
                    </a>
                  </li>
                  <li>
                    <a
                      className="contact-list-link text-muted f-14"
                      href="https://web.whatsapp.com/send?phone=5567998304008"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/icons/icon-wpp.png"
                        width={30}
                        height={30}
                        alt="WhatsApp"
                      />
                      67 99830-4008
                    </a>
                  </li>
                  <li>
                    <a
                      className="contact-list-link text-muted f-14"
                      href="https://web.whatsapp.com/send?phone=5567998304008"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/icons/icon-tel.png"
                        width={30}
                        height={30}
                        alt="Telefone"
                      />
                      67 3441-4008
                    </a>
                  </li>
                </ul>
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
