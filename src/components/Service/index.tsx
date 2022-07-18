import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    {
      title: "Energia Solar",
      desc: "On-grid: sistemas que trabalham em conjunto com a rede elétrica pública das distribuidoras e são vantajosos para consumidores de áreas urbanas...",
      icon: "/images/solar-energy.png",
    },
    {
      title: "Informática",
      desc: "Trabalhamos com acessórios, equipamentos eletrônicos e uma grande variedade de produtos das melhores marcas do mercado para melhor...",
      icon: "/images/tech.png",
    },
    {
      title: "Internet Via Satélite",
      desc: "Em parceria com a Hughesnet, líder mundial no fornecimento de banda larga via satélite, oferecemos internet para residências, áreas rurais..",
      icon: "/images/internet.png",
    },
    {
      title: "Segurança",
      desc: "Instalações modernas, de alta tecnologia e equipe bem treinada nos garantem condições de lhe atender plenamente neste aspecto, garantindo a segurança...",
      icon: "/images/security.png",
    },
    {
      title: "Softwares De Gestão",
      desc: "Trabalhamos com sistemas de gestão flexíveis e completos para atender suas necessidades empresariais de acordo com as exigências fiscais...",
      icon: "/images/software.png",
    },
    {
      title: "Móveis Para Escritório",
      desc: "Comercializamos móveis e equipamentos para escritório com soluções corporativas, residenciais, escolares e empresariais. Conheça nossas marcas...",
      icon: "/images/furniture.png",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Serviços</span>
              </h3>
              <p className="text-muted">
                Ofereçemos serviços de alta eficiência com profissionais
                qualificados e equipamentos de última geração.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <h5 className="text-dark font-weight-normal pt-1 mb-2">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
