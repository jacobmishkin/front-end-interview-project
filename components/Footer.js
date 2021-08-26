import Link from 'next/link';
import styled from 'styled-components';
import Blog from '../public/blog.svg';
import Instagram from '../public/instagram.svg';
import Twitter from '../public/twitter.svg';
import Facebook from '../public/facebook.svg';
import Mail from '../public/mail.svg';

const FooterContainer = styled.footer`
  background: black;
  color: white;
  height: 146px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperIcon = styled.div`
  max-width: 350px;
  width: 215px;
  display: flex;
  justify-content: space-between;
`;

const TermsContainer = styled.div`
  margin-top: 32px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  a {
    color: white;
  }
`;

const Footer = () => (
  <FooterContainer>
    <WrapperIcon>
      {/* added <Link /> here for examples due to this demo not linking wanted to show at one place how it can work */}
      <Link href="/">
        <a>
          <Blog />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Instagram />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Twitter />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Facebook />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Mail />
        </a>
      </Link>
    </WrapperIcon>

    <TermsContainer>
      <div>
        <Link href="/">
          <a>Terms Of Service</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Privacy</a>
        </Link>
      </div>
    </TermsContainer>
  </FooterContainer>
);

export default Footer;
