# Create token gated site from Notion
[![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)
> Create a website from a Notion page and only allowing access to community members based on wallet content.

## Intro

The explanation below should be so simple that even non engineers can deploy a token gated website from a Notion page.

This starter kit has been forked and adapted from [transitive-bullshit / nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit), which works
off of [NotionX](https://github.com/NotionX/react-notion-x) _(I have coppied code from another project I had this in, hence no fork link)_.

Updates have been made to only allow access to users that have the required content in their wallet to be a member of the community.


## How to release

### 1. Create the community on guild.xyz

_For the moment we're going to piggy back off the great work done by [agora.space](https://agora.space)_ to create a community.

1. Go to [alpha.guild.xyz](https://alpha.guild.xyz/)
2. Connect your wallet
3. Set up a guild to create your community ![img.png](./readme-pics/img.png)
4. Connect the guild to a discord channel (the discord channel is not required for anything for us, it's just a necessary step for their UI)
5. Set the requirements the allows someone to access the community ![img_1.png](./readme-pics/img_1.png)
6. Click SUMMON!
7. Keep the tab open or copy and keep the end of the url which contains the guild e.g.
   `https://alpha.guild.xyz/notiontokengate` copy `notiontokengate`

### 2. Get the notion page ready

1. Go to the notion page you would like to turn into a site
2. Click `Share` top right
3. Toggle share to web
4. Take note of the long code at the end of the page (e.g. if url is `https://yournotionname.notion.site/Page-Name-7cfba5335c5a4da9b6c3ab8b393cefe3` note `7cfba5335c5a4da9b6c3ab8b393cefe3`)

### 3. Fork this repo
**This should (hopefully) be so easy that even if you don't code you can still set this up**

_If you are technical feel free to use your own method from here using `yarn dev` to run locally_

1. Set up a github account (if you haven't already)
2. Click `Fork` top right of this project (link [here](https://github.com/ssp6/web3-token-gate-notion-starter-kit) if reading anywhere other than github)
   1. Note: This will essentially just copy the project to your github account so that no changed effect other people's github
3. Scroll down and click on the file `site.config.js`
4. Click the little pen/pencil top right to edit the file ![img_3.png](./readme-pics/img_3.png)
5. Update the lines that have a `// TODO` next to them
   1. Line 3 - inside the `''` after `rootNotionPageId: ` paste the notion url code noted above
   2. Fill in your own basic details as social usernames if you want
   3. Line 56 - inside the `''` after `guildUrlName: ` paste the guild url from stage 1
6. When complete at the bottom click `Commit changes` an
7. Go back to the list that contained the file `site.config.js` and click the `public` folder, then the `manifest.json`
8. Similar to above, edit the `manifest.json` file and inside the `""` after `"name": ` and `"short_name"` type what ever your site is called
9. Commit those changes and everything's good to go!

### 4. Set up a vercel account

_vercel is a service that is going to be used to host your site, it's free tier is fairly generous!_

1. Got to [https://vercel.com/signup](https://vercel.com/signup)
2. Click `Continue with GitHub`
3. Once set up get to the [on boarding page](https://vercel.com/new?onboarding=true)
4. Under the words `Import Git Repository` click the dropdown and `+ Add Github Account` ![img_4.png](./readme-pics/img_4.png)
5. Once connected find your repository and click `Import`
6. In the `Configure Project` area expand the `Environment Variables` ![img_5.png](./readme-pics/img_5.png)
7. As seen above, type in `JWT_SECRET` in the NAME field and a random password in the VALUE field (I just used a randomly generated password, you can always view it later but shouldn't need to remember it)
8. Remember to hit the `Add` button and the click the big `Deploy` button!



# Original docs

This repo is what I use to power my personal blog / portfolio site [transitivebullsh.it](https://transitivebullsh.it).

It uses Notion as a CMS, fetching content from Notion and then uses [Next.js](https://nextjs.org/) and [react-notion-x](https://github.com/NotionX/react-notion-x) to render everything.

The site is then deployed to [Vercel](http://vercel.com).

## Features

- Setup only takes a few minutes ([single config file](./site.config.js)) 💪
- Robust support for Notion content via [react-notion-x](https://github.com/NotionX/react-notion-x)
- Next.js / TS / React / Notion
- Excellent page speeds
- Sexy LQIP image previews
- Embedded GitHub comments
- Automatic open graph images
- Automatic pretty URLs
- Automatic table of contents
- Full support for dark mode
- Quick search via CMD+P just like in Notion
- Responsive for desktop / tablet / mobile
- Optimized for Next.js and Vercel

## Setup

**All config is defined in [site.config.js](./site.config.js).**

1. Fork / clone this repo
2. Change a few values in [site.config.js](./site.config.js)
3. `yarn`
4. `npm run dev` to test locally
5. `npm run deploy` to deploy to vercel 💪

I tried to make configuration as easy as possible.

All you really need to do to get started is edit `rootNotionPageId`. It defaults to rendering my site's public notion page [78fc5a4b88d74b0e824e29407e9f1ec1](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1).

You'll want to make your root Notion page **public** and then copy the link to your clipboard. Then extract the last part of the URL that looks like `d1b5dcf8b9ff425b8aef5ce6f0730202`, which is your page's Notion iD.

In order to find your Notion workspace ID (optional), just load any of your site's pages into your browser and open up the developer console. There will be a global variable that you can access called `block` which is the Notion data for the current page, and you just have to type `block.space_id` which will print out your page's workspace ID.

I recommend setting up a collection on your home page (optional; I use an inline gallery [here](https://notion.so/78fc5a4b88d74b0e824e29407e9f1ec1)) that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you would normally in Notion. There are a few parts of the code with logic to only show comments on blog post pages (collection item detail pages).

## URL Paths

The app defaults to slightly different pathnames in dev and prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page's title suffixed with its Notion ID. I've found that it's really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically for you as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don't currently provide a solution for detecting old links aside from Next.js built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects).

See [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) from for more details.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.

## Theming

All CSS styles that customize Notion content are located in [styles/notion.css](./styles/notion.css).

They mainly target global CSS classes exported by react-notion-x [styles.css](https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/styles.css).

It should be pretty easy to customize most styling-related things, especially with local development and hot reload.

### Dark Mode

<p align="center">
  <img alt="Light Mode" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F83ea9f0f-4761-4c0b-b53e-1913627975fc%252Ftransitivebullsh.it_-opt.jpg%3Ftable%3Dblock%26id%3Ded7e8f60-c6d1-449e-840b-5c7762505c44%26cache%3Dv2" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark Mode" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fc0839d6c-7141-48df-8afd-69b27fed84aa%252Ftransitivebullsh.it__(1)-opt.jpg%3Ftable%3Dblock%26id%3D23b11fe5-d6df-422d-9674-39cf7f547523%26cache%3Dv2" width="45%">
</p>

Dark mode is fully supported and can be toggled via the sun / moon icon in the footer.

## Extras

All extra dependencies are optional -- the project should work just fine out of the box.

If you want to copy some of the fancier elements of my site, then you'll have to set up a few extras.

### Fathom Analytics

[Fathom](https://usefathom.com/ref/42TFOZ) provides a lightweight alternative to Google Analytics.

It's optional, but I really love how simple and elegant their solution is.

To enable analytics, just add a `NEXT_PUBLIC_FATHOM_ID` environment variable.

This environment variable will only be taken into account in production, so you don't have to worry about messing up your analytics with localhost development.

### GitHub Comments

<p align="center">
  <img alt="Embedded GitHub Comments" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fa43f996c-de07-4d8a-8461-b35f9d43e4b2%252Fcomments-desktop-opt.jpg%3Ftable%3Dblock%26id%3Ded07d7c2-57c9-4aba-81b3-f5fa069371d4%26cache%3Dv2" width="420">
</p>

[Utteranc.es](https://utteranc.es/) is an amazing [open source project](https://github.com/utterance/utterances) which enables developers to embed GitHub issues as a comments section on their websites. Genius.

The integration is really simple. Just edit the `utterancesGitHubRepo` config value to point to the repo you'd like to use for issue comments.

You probably want to read through the Utterances docs before enabling this in production, since there are some subtleties around how issues get mapped to pages on your site, but overall the setup was super easy imho and I love the results.

### Preview Images

This is a really cool feature that's inspired by Medium's smooth image loading, where we first load a low quality, blurred version of an image and animate in the full quality version once it loads. It's such a nice effect, but it does add a bit of work to set up.

If `isPreviewImageSupportEnabled` is set to `true`, then the app will compute LQIP images via [lqip-modern](https://github.com/transitive-bullshit/lqip-modern) for all images referenced by your Notion workspace. These will be stored in a Google Firebase collection (as base64 JPEG data), so they only need to be computed once.

You'll have to set up your own Google Firebase instance of Firestore and supply three environment variables:

```bash
# base64-encoded string containing your google credentials json file
GOOGLE_APPLICATION_CREDENTIALS=

# name of your google cloud project
GCLOUD_PROJECT=

# name of the firebase collection to store images in
FIREBASE_COLLECTION_IMAGES=
```

The actual work happens in the [create-preview-image](./api/create-preview-image) serverless function.

### Automatic Social Images

<p align="center">
  <img alt="Auto-generated social image" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fe1877c31-0bc9-46b7-8aaf-7bcae21baf2b%252Fsocial-image-opt.jpeg%3Ftable%3Dblock%26id%3D735b04d2-2a77-4035-8942-a17f8d41fe83%26cache%3Dv2" width="420">
</p>

Open Graph images like this one will be generated for each page of your site automatically based each page's content.

Note that you shouldn't have to do anything extra to enable this feature as long as you're deploying to Vercel.

### Automatic Table of Contents

<p align="center">
  <img alt="Smooth ToC Scrollspy" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb2df62d-9028-440b-964b-117711450921%2Ftoc2.gif?table=block&id=d7e9951b-289c-4ff2-8b82-b0a61fe260b1&cache=v2" width="240">
</p>

By default, every article page will have a table of contents displayed as an `aside` on desktop. It uses **scrollspy** logic to automatically update the current section as the user scrolls through your document, and makes it really easy to jump between different sections.

If a page has less than `minTableOfContentsItems` (default 3), the table of contents will be hidden. It is also hidden on the index page and if the browser window is too small.

This table of contents uses the same logic that Notion uses for its built-in Table of Contents block (see [getPageTableOfContents](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-page-table-of-contents.ts) for the underlying logic and associated unit tests).

## Screenshots

### Mobile Article Page

<p align="center">
  <a href="https://transitivebullsh.it/free-resources-for-indie-saas-devs">
    <img alt="Mobile Article Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F6c05a0f9-59a0-4322-bef9-3f08fe4efc6a%252Farticle-mobile-opt.jpg%3Ftable%3Dblock%26id%3Da1eb2263-fdf1-4d51-a3d4-8a02cb32bbba%26cache%3Dv2" width="300">
  </a>
</p>

### Desktop Home Page

<p align="center">
  <a href="https://transitivebullsh.it">
    <img alt="Desktop Home Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F1d3ab4b2-60af-4b95-b35d-cac5d440b8ca%252Ftransitivebullsh.it_-opt.jpg%3Ftable%3Dblock%26id%3D97f445e8-2da1-41cd-996a-5ad0e73a1d79%26cache%3Dv2" width="600">
  </a>
</p>

### Desktop Article Page (Dark Mode)

<p align="center">
  <a href="https://transitivebullsh.it/free-resources-for-indie-saas-devs">
    <img alt="Desktop Article Page" src="https://ssfy.io/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fb564d13f-b71b-4473-8531-65b5dd9b995f%252Ftransitivebullsh.it__(4)-opt.jpg%3Ftable%3Dblock%26id%3D16e03de2-0df7-4232-a129-e1666505c4d2%26cache%3Dv2" width="600">
  </a>
</p>

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

Support my open source work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
