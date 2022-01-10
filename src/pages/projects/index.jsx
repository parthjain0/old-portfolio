import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const ProjectsIndex = () => {
  return (
    <Layout>
      <h2>kdkfk</h2>
    </Layout>
  );
};

export const query = graphql`
  query AllProjects {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        name
        id
      }
    }
  }
`;

export default ProjectsIndex;
