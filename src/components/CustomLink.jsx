import { Link } from 'gatsby';
import React from 'react';

const CustomLink = (props) => {
  return (
    <>
      <Link
        {...props}
        activeStyle={{
          position: 'relative',
          bottom: '2px',
          paddingBottom: '2px',
          borderBottom: '2px solid coral',
          color: 'coral',
        }}
      ></Link>
    </>
  );
};

export default CustomLink;
