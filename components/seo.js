import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { siteMetadata } from '../data/site-metadata';

export function SEO({ description, title }) {
  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>{`${title} | ${siteMetadata.title}`}</title>
      {[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].map((meta) => (
        <meta name={meta.name} property={meta.property} />
      ))}
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};
