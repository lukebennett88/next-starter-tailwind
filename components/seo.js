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
          id: '65a3defa-14b6-4314-96b6-e2948cf44ab7',
          name: `description`,
          content: metaDescription,
        },
        {
          id: '705fea4f-13b5-46d1-8525-36841447181c',
          property: `og:title`,
          content: title,
        },
        {
          id: 'c6a88344-e315-4635-be53-ab01218aafe4',
          property: `og:description`,
          content: metaDescription,
        },
        {
          id: 'c15d0d74-9225-448a-b113-c85c732a52cc',
          property: `og:type`,
          content: `website`,
        },
        {
          id: 'c51ca1dc-3107-44dc-a346-00cfee853bf0',
          name: `twitter:card`,
          content: `summary`,
        },
        {
          id: '20dd21ab-0daa-48cd-a9e7-2466ee2831ba',
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          id: '26e08fda-f2d2-4c23-819e-3422a1d2f91f',
          name: `twitter:title`,
          content: title,
        },
        {
          id: '6d6dcf69-178a-45ac-8661-c5fdf036bf7f',
          name: `twitter:description`,
          content: metaDescription,
        },
      ].map((meta) => (
        <meta
          key={meta.id}
          name={meta.name}
          property={meta.property}
          content={meta.content}
        />
      ))}
    </Head>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};
