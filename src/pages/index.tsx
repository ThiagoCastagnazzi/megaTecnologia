import type { NextPage } from "next";
import About from "../components/About";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Service from "../components/Service";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Mega Tecnologia">
      <Header />
      <Hero />
      <Product />
      <Service />
      <About />
      <Footer />
    </Layout>
  );
};

export default Home;
