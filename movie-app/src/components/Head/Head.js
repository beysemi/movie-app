import NextHead from 'next/head';
import React from 'react';

const Head = ({title, description, image, type}) => {
  return (
    <NextHead>
              <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta
                    name="twitter:image"
                    content={
                    image
                        ? image
                        : image
                    }
                />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content={type || 'website'} />
                <meta
                    property="og:image"
                    content={
                    image
                        ? image
                        : image
                    }
                />
               

    </NextHead>
  )
}

export default Head
