import React, { FC } from 'react';
import Head from 'next/head'

interface SeoProps {
  title: string,
  indexed?: boolean,
  description?: string,
  keywords?: string
}

const Seo: FC<SeoProps> = ({
  children,
  title,
  keywords,
  description,
  indexed = true,
}) => (
  <>
    <Head>
      <title>
        {title}
        {' '}
        | Смотреть фильмы онлайн в хорошем качестве
      </title>
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      <meta name="robots" content={indexed ? 'index,follow' : 'noindex,nofollow'} />
      <meta name="keywords" content={`Фильмы, смотреть онлайн бесплатно, fullHD, сайт с фильмами, ${keywords}`} />
      <meta name="description" content={`Сайт с фильмами для бесплатного просмотра. ${description || ''}`} />
    </Head>
    {children}
  </>
);

export default Seo;
