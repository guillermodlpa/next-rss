import { merge } from '@corex/deepmerge';
import { loadFile } from './file';
import { IConfig } from './interface';

const defaultConfig: Partial<IConfig> = {
    sourceDir: '.next',
    outDir: 'public',
    postsDir: 'posts',
    exclude: [],
    createFeedItem: (pageProps, config) => ({
        title: pageProps.postData.title,
        id: `${config.siteUrl}/${config.postsDir}/${pageProps.postData.id}`,
        link: `${config.siteUrl}/${config.postsDir}/${pageProps.postData.id}`,
        date: new Date(pageProps.postData.date)
    })
};

const updateConfig = (
    currConfig: Partial<IConfig>,
    newConfig: Partial<IConfig>
): IConfig => {
    return merge([currConfig, newConfig], {
        arrayMergeType: 'overwrite'
    }) as IConfig;
};

export const withDefaultConfig = (config: Partial<IConfig>): IConfig => {
    return updateConfig(defaultConfig, config);
};

export const loadConfig = (path: string): IConfig => {
    const baseConfig = loadFile<IConfig>(path);
    return withDefaultConfig(baseConfig!);
};
