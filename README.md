# next-rss

next-rss is an RSS generation library for next.js apps.

## Installation

```sh
npm install @guillermodlpa/next-rss
```

## Usage

Create the next-rss.js file in your project's root directory.

```js
module.exports = {
    siteTitle: 'example web site',
    siteDescription: 'example web site rss feed',
    siteLanguage: 'en',
    siteCopyright: '©Tadashi Yamazaki',
    siteUrl: 'http://example.com',
    outDir: 'public',
    postsDir: 'posts',
    createFeedItem: (pageProps) => ({
        title: pageProps.postData.title,
        id: `${config.siteUrl}/${config.postsDir}/${pageProps.postData.id}`,
        link: `${config.siteUrl}/${config.postsDir}/${pageProps.postData.id}`,
        date: new Date(pageProps.postData.date)
    }),
}
```

Build your Next.js project, and then run this command

```sh
npx next-rss
```

You can add it to the `postbuild` scripts in `package.json` to execute it automatically.

### Details

* The script will parse the build manifests to obtain pages in the `[postsDir]` folder.
* The function `createFeedItem` will produce each feed item and it can be customized to set additional parameters.
* The function `createFeedItem` receives each page props and the `next-rss` config itself.

