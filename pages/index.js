import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import { device } from '../components/GlobalStyles/Utils/device';
import Title from '../components/Title';

const Container = styled.div`
  margin: 0 16px 0 16px;
  @media ${device.laptop} {
    margin: 0 auto;
    max-width: 737px;
  }
`;

const Index = () => (
  <div>
    <Head>
      <title>Foxtrot</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
    </Head>
    <main>
      <Header />
      <Title />
      <Container>
        <Products />
      </Container>
      <Footer />
    </main>
  </div>
);

export default Index;
