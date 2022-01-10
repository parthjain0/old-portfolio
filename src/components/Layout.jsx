import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';
import Social from './Social';
import favicon from '../images/favicon.png';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    color: white;
  }
  body{
    margin: 2rem auto;
    padding: 0;
    width: 80%;
    background: linear-gradient(to right, #000428, #004e92);
  }
  h2{
    font-size: 2rem;
  }
  @media screen and (max-width: 850px){
    body{
      width: 95%;
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
          author
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <link rel="icon" href={favicon} />
        <script
          src="https://kit.fontawesome.com/df12ef64ac.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Social />
    </React.Fragment>
  );
};

export default Layout;
