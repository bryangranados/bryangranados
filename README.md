# My Personal Website

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) site built on a template from [Timothy Lin](https://github.com/timlrx/tailwind-nextjs-starter-blog), and deployed on [Vercel](https://vercel.com/).

**Link to website:** https://bryangranados.com/

![Screenshot of landing page](https://raw.githubusercontent.com/diathekez/bryangranados/master/public/static/images/bryangranados_screenshot.png)

## Features

- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attributes
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Mobile-responsiveness
- Light and dark theme (this can also be customized)
- [MDX - write JSX in markdown documents](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Spotify "now playing" API component
- Command palette for easy navigation
- Support for nested routing of blog posts
- SEO friendly with RSS feed, sitemaps, and more

## Quick Start Guide

1. JS (official support)

```bash
npx degit https://github.com/diathekez/bryangranados.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts (or delete the section, if you wish)
7. Deploy on [Vercel](https://vercel.com/)

## Development

After installing dependencies (npm install), run the development server:

```bash
npm start
```

    or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
