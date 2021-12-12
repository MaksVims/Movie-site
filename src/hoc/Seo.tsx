import React, {FC} from 'react';
import Head from 'next/head'

interface SeoProps {
  title: string,
  indexed?: boolean,
  description?: string,
  keywords?: string
}

const Seo: FC<SeoProps> =
  ({children, title, indexed = true, keywords, description}) => {
    return (
      <>
        <Head>
          <title>{title} | Смотреть фильмы онлайн в хорошем качестве</title>
          <meta name="robots" content={indexed ? 'index,follow' : 'noindex,nofollow'}/>
          <meta name="keywords" content={`Фильмы, смотреть онлайн бесплатно, fullHD, сайт с фильмами, ${keywords}`}/>
          <meta name="description" content={`Сайт с фильмами для бесплатного просмотра. ${description || ''}`}/>
        </Head>
        {children}
      </>
    );
  };

export default Seo;