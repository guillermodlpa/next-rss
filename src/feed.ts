import { Feed } from 'feed';
import { IConfig, INextManifest } from './interface';

export const createFeedSet = (
    config: IConfig,
    manifest: INextManifest
): Feed => {
    const feed = new Feed({
        title: config.siteTitle,
        description: config.siteDescription,
        id: config.siteUrl,
        link: config.siteUrl,
        language: config.siteLanguage,
        copyright: config.siteCopyright
    });
    manifest.posts?.forEach((post) => {
        if (!post.pageProps) {
            return;
        }
        const feedItem = config.createFeedItem(post.pageProps, config);
        feed.addItem(feedItem);
    });
    feed.items.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });
    return feed;
};
