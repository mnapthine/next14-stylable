// This file is generated by Velite

import config from '../velite.config'

type Collections = typeof config.collections

export type Options = Collections['options']['schema']['_output']
export declare const options: Options

export type Category = Collections['categories']['schema']['_output']
export declare const categories: Category[]

export type Tag = Collections['tags']['schema']['_output']
export declare const tags: Tag[]

export type Page = Collections['pages']['schema']['_output']
export declare const pages: Page[]

export type Post = Collections['posts']['schema']['_output']
export declare const posts: Post[]

export type ComponentDoc = Collections['componentDocs']['schema']['_output']
export declare const componentDocs: ComponentDoc[]
