import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';
import Social from './Social';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    background-color: #05445E;
    font-family: 'Poppins', sans-serif;
    color: #f3dfd7;
    font-size: 1.2rem;
  }
  h1{
    font-size: 3rem;
  }
`;
const Container = styled.div`
  margin: 2rem auto;
  width: 80%;
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
        <meta name="author" content={data.site.siteMetadata.author}></meta>
        <meta name="keywords" content={data.site.siteMetadata.keywords}></meta>
        <script
          src="https://kit.fontawesome.com/df12ef64ac.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <GlobalStyle />
      <Container>
        <Navbar />
        <main>{children}</main>
        <Social />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
