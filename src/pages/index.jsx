import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexStyled = styled.div`
  margin-top: 10vh;
  gap: 5rem;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  justify-content: space-between;
  align-items: center;
  /* > div {
    flex: 1;
  } */
  .info p {
    font-size: 1.2rem;
    margin: 0.25rem 0 1.5rem;
    line-height: 2rem;
  }
  button {
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 200ms ease-in-out;
  }
  button a,
  button a i {
    color: white;
    text-decoration: none;
    transition: all 200ms ease-in-out;
  }
  button:hover {
    > a,
    > a i {
      color: #cecece;
    }
    border-color: #cecece;
  }
  .latestproj {
    text-align: center;
    h3 {
      margin-bottom: 1rem;
    }
    a {
      background: transparent;
      border: 2px solid white;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      transition: all 200ms ease-in-out;
      text-decoration: none;
      transition: all 200ms ease-in-out;
      margin: 0 1rem;
      &:hover {
        border-color: #cecece;
        color: #cecece;
      }
    }
  }
`;
const Index = ({ data }) => {
  const project = data.allMarkdownRemark.nodes[0];
  console.log(project);

  return (
    <Layout>
      <IndexStyled>
        <div className="info">
          <h1>Hi, I'm Parth Jain.</h1>
          <p>
            I am a frontend developer who is passionate about creating web apps
            as well as hybrid apps for android and ios via newer SPA
            technologies. Currently I am working on react apps and diving deeper
            into libraries and tools surrounding it.
          </p>
          <button type="submit">
            <a
              href="https://drive.google.com/file/d/18YBO7hoXZ_11SEqb4lQ0RCH75Ws-K8MH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <i className="fas fa-angle-double-down"></i>
            </a>
          </button>
        </div>
        <div className="latestproj">
          <h3>LATEST PROJECT</h3>
          <div>
            <GatsbyImage
              image={
                project.frontmatter.featuredImage.childImageSharp
                  .gatsbyImageData
              }
              style={{
                margin: '1rem auto',
                width: '480px',
                height: '270px',
              }}
              objectFit="contain"
              alt=""
            />
            <h3>{project.frontmatter.title}</h3>
            <div className="buttons-flex">
              <a
                href={project.frontmatter.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href={project.frontmatter.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </IndexStyled>
    </Layout>
  );
};

export const query = graphql`
  query LatestProject {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        frontmatter {
          stack
          title
          code
          live
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
  }
`;

export default Index;
