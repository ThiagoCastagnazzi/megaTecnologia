import Image from "next/image";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: "/images/home-mega.png",
      altText: "Mega",
    },
    {
      src: "/images/home-mega2.png",
      altText: "Mega2",
    },
    {
      src: "/images/home-mega3.png",
      altText: "Mega3",
    },
    {
      src: "/images/home-mega4.png",
      altText: "Mega4",
    },
  ];

  const itemLength = items.length - 1;

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <Image
          className="carouse-img"
          src={item.src}
          alt={item.altText}
          width={800}
          height={350}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="section" id="home">
      <Container className="container-section">
        <Row className="hero-row">
          <div className="pr-lg-5">
            <p className="text-uppercase text-primary font-weight-medium mb-4 hero-descrip-p">
              Mega Tecnologia
            </p>
            <h1 className="mb-4 font-weight-normal line-height-1_4 hero-descrip-title">
              Referência de Energia Solar em{" "}
              <span className="text-primary font-weight-medium hero-descrip-title">
                Mato Grosso do Sul
              </span>
            </h1>
            <p className="text-muted mb-4 pb-2 home-descrip-text">
              Somos uma empresa de integração de tecnologias, voltada para o
              fornecimento de soluções e do que há de mais moderno para
              residências, escritórios, empresas privadas e órgãos públicos.
            </p>
          </div>
          <Col>
            <Carousel
              previous={previousButton}
              next={nextButton}
              activeIndex={activeIndex}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }}
              />
              {carouselItemData}
              <CarouselControl
                directionText="Prev"
                direction="prev"
                onClickHandler={previousButton}
              />
              <CarouselControl
                directionText="Next"
                direction="next"
                onClickHandler={nextButton}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
