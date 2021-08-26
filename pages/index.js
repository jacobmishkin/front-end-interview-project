import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

const Container = styled.div`
  margin: 0 16px 0 16px;
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
      <Container>
        <Products />
      </Container>
      <Footer />
    </main>
  </div>
);

export default Index;
