import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'
import * as config from '../lib/config'

type Props = types.PageProps & {
  title?: string
  socialImage?: string
  socialDescription?: string
  canonicalPageUrl?: string
}
export const PageHead: React.FC<Props> = ({
  site,
  title,
  socialImage,
  socialDescription,
  canonicalPageUrl
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#EB625A' />
      <meta property='og:type' content='website' />

      {title && <meta property='og:title' content={title} />}
      {site?.name ||
        (title && (
          <meta property='og:site_name' content={site?.name || title} />
        ))}

      <meta name='twitter:title' content={title} />
      {site?.domain && <meta property='twitter:domain' content={site.domain} />}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {socialDescription && (
        <>
          <meta name='description' content={socialDescription} />
          <meta property='og:description' content={socialDescription} />
          <meta name='twitter:description' content={socialDescription} />
        </>
      )}

      {socialImage ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={socialImage} />
          <meta property='og:image' content={socialImage} />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {canonicalPageUrl && (
        <>
          <link rel='canonical' href={canonicalPageUrl} />
          <meta property='og:url' content={canonicalPageUrl} />
          <meta property='twitter:url' content={canonicalPageUrl} />
        </>
      )}

      {title && <title>{title}</title>}
    </Head>
  )
}
