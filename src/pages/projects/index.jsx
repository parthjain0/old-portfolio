import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const ProjectsIndexStyled = styled.div`
  margin-top: 4rem;
  h2,
  h3,
  p {
    text-align: center;
  }
  .grid-items {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 5rem;
  }
  .grid-items div {
    border: 1px solid white;
    padding: 1.25rem 0;
    border-radius: 5px;
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
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack.replaceAll(',', ' | ')}</p>
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
        }
        id
      }
    }
  }
`;

export default ProjectsIndex;
