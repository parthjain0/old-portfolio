import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const ProjectsIndexStyled = styled.div`
  margin: 4rem auto 0;
  text-align: center;
  h3 {
    margin-bottom: 0.25rem;
  }
  .grid-items {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    column-gap: 1rem;
    row-gap: 4rem;
    > div {
      /* border: 3px solid white;
      border-radius: 15px; */
      padding: 1rem 0;
    }
  }
  .buttons-flex {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  a {
    background: transparent;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 200ms ease-in-out;
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
      border-color: #cecece;
      color: #cecece;
    }
  }
`;
const ProjectsIndex = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;
  console.log(projects);

  return (
    <Layout>
      <ProjectsIndexStyled>
        <h2>PROJECTS</h2>
        <div className="grid-items">
          {projects.map((project) => (
            <div key={project.id}>
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
              <p>{project.frontmatter.stack.replaceAll(',', ' | ')}</p>
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
          ))}
        </div>
      </ProjectsIndexStyled>
    </Layout>
  );
};

export const query = graphql`
  query AllProjects {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
        id
      }
    }
  }
`;

export default ProjectsIndex;
