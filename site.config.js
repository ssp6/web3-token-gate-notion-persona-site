module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '7cfba5335c5a4da9b6c3ab8b393cefe3', // TODO: Add your own

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sean personal site', // TODO: Add your own
  domain: '', // TODO: Add your own
  author: 'Sean Paterson', // TODO: Add your own

  // open graph metadata (optional)
  description: 'Sean Paterson personal web3 gated site', // TODO: Change
  socialImageTitle: '', // TODO: Add your own
  socialImageSubtitle: '', // TODO: Add your own

  // social usernames (optional
  twitter: 'ssp6Sean', // TODO: Add your own
  github: 'ssp6', // TODO: Add your own
  linkedin: '', // TODO: Add your own

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // Api url to external auth service (agora.space or custom)
  web3AuthApiBaseUrl: 'https://api.agora.space',

  //urlName of guild taken from url bar
  guildUrlName: 'notiontokengate', // TODO: Update with own guild urlName OR leave blank to turn off token gating

  // Secret for signing jwt
  jwtSecret: process.env.JWT_SECRET // TODO: Create .env file with JWT_SECRET & add env variable to vercel
}
