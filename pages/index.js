import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

const Index = () => (
  <div>
    <Head>
      <title>Foxtrot</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
    </Head>
    <main>
      <Header />
      <Products />
      <Footer />
    </main>
  </div>
);

export default Index;
