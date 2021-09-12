import styled, { createGlobalStyle } from 'styled-components';
import Logo from '../src/logo.png';

const footerObject = {
  menus: [
    {
      name: 'Navigation',
      menuList: [
        {
          title: 'Cloud Intelligence',
          link: 'https://cognni.ai/cloud-intelligence',
        },
        {
          title: 'On-premises Intelligence',
          link: 'https://cognni.ai/on-premises-mapping/',
        },
        {
          title: 'Use Cases',
          link: 'https://cognni.ai/use-cases/',
        },
        {
          title: 'News & Events',
          link: 'https://cognni.ai/news-and-events/',
        },
        {
          title: 'Become a partner',
          link: 'https://cognni.ai/partners',
        },
      ],
    },
    {
      name: 'Legal',
      menuList: [
        {
          title: 'Terms of Use',
          link: 'https://cognni.ai/terms-of-use/',
        },
        {
          title: 'Privacy Policy',
          link: 'https://cognni.ai/privacy-policy/',
        },
      ],
    },
    {
      name: 'Contact',
      menuList: [
        {
          title: 'Support',
          link: 'https://cognni.ai/contact-support/',
        },
        {
          title: 'General enquiries',
          link: 'https://cognni.ai/contact-general/',
        },
      ],
    },
  ],
  socialMedia: [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/10297664',
      icon: 'fab fa-linkedin-in',
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/channel/UC5_GSCT8nMZPa9Q03K_CEzg',
      icon: 'fab fa-youtube',
    },
  ],
  copyRight: '© 2020 Copyright. Cognni',
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  /* background: #1876c4; */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  font-size:62.5%;
}

body {
  font-size:1.6rem;
}

a, li, ul {
  text-decoration:none;
  list-style:none;
  color:unset;
  
}

`;

const Footer = styled.footer`
  display: grid;
  /* grid-template-columns:1fr 1fr; */
  background: #f8f8f8;
  padding: 8rem 1.4rem 4rem 1.4rem;
  gap: 38px;
  color: #34314c;
  @media (min-width: 50em) {
    grid-template-columns: 1fr 1fr;
    padding: 8rem 10rem 4rem 10rem;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, auto);
    padding: 8rem 3.2rem 4rem 3.2rem;
    justify-content: center;
    gap: 20px 130px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 150px;
`;

const ListWrapper = styled.ul``;
const ListTitle = styled.p`
  margin-bottom: 3.8rem;
  font-weight: 600;
  font-size: 1.8rem;
`;
const ListItem = styled.a`
  cursor: pointer;
  font-size: 1.6rem;

  &:hover {
    opacity: 80%;
  }
`;
const ListItemWrapper = styled.div`
  display: grid;
  gap: 14px;
`;

const FooterCopyRight = styled.p`
  font-size: 1.5rem;
  margin-top: 4rem;
  font-weight: 400;
`;

const FooterSocialWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;
const FooterSocialIcon = styled.a`
  font-size: 2rem;
`;

function App() {
  const { menus, copyRight, socialMedia } = footerObject;
  return (
    <>
      <GlobalStyle />
      <Footer>
        <LogoImage src={Logo} />
        {menus.map((menu, index) => (
          <ListWrapper key={index} id={menu.name}>
            <ListTitle>{menu.name}</ListTitle>
            <ListItemWrapper>
              {menu.menuList.map((sub, index) => (
                <ListItem key={index} target='_parent' href={sub.link}>
                  {sub.title}
                </ListItem>
              ))}
              {index === menu.menuList.length && (
                <FooterSocialWrapper>
                  {socialMedia.map((social) => (
                    <FooterSocialIcon
                      href={social.link}
                      target='_parent'
                      className={social.icon}
                    ></FooterSocialIcon>
                  ))}
                </FooterSocialWrapper>
              )}
            </ListItemWrapper>
          </ListWrapper>
        ))}
        <FooterCopyRight>{copyRight}</FooterCopyRight>
      </Footer>
    </>
  );
}

export default App;
