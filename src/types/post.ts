interface Guid {
  url: string;
}

interface Title {
  text: string;
}

interface Content {
  html: string;
  isProtected: boolean;
}

interface Excerpt {
  html: string;
  isProtected: boolean;
}

interface Meta {
  recipeRoundupName?: string | undefined;
  recipeRoundupDescription?: string | undefined;
  footnotes?: string | undefined;
}

interface YoastHead {
  title?: string | undefined;
  description?: string | undefined;
  robots?:
    | {
        index?: string | undefined;
        follow?: string | undefined;
        maxSnippet?: string | undefined;
        maxImagePreview?: string | undefined;
        maxVideoPreview?: string | undefined;
      }
    | undefined;
  canonical?: string | undefined;
  ogLocale?: string | undefined;
  ogType?: string | undefined;
  ogTitle?: string | undefined;
  ogDescription?: string | undefined;
  ogUrl?: string | undefined;
  ogSiteName?: string | undefined;
  articlePublishedTime?: string | undefined;
  articleModifiedTime?: string | undefined;
  ogImage?:
    | Array<{
        width?: number | undefined;
        height?: number | undefined;
        url?: string | undefined;
        type?: string | undefined;
      }>
    | undefined;
  author?: string | undefined;
  twitterCard?: string | undefined;
  twitterMisc?:
    | {
        escritoPor?: string | undefined;
        estTempoDeLeitura?: string | undefined;
      }
    | undefined;
  schema?:
    | {
        context?: string | undefined;
        graph?:
          | Array<{
              type?: string | undefined;
              id?: string | undefined;
              url?: string | undefined;
              name?: string | undefined;
              isPartOf?:
                | {
                    id?: string | undefined;
                  }
                | undefined;
              primaryImageOfPage?:
                | {
                    id?: string | undefined;
                  }
                | undefined;
              image?:
                | {
                    id?: string | undefined;
                  }
                | undefined;
              thumbnailUrl?: string | undefined;
              datePublished?: string | undefined;
              dateModified?: string | undefined;
              author?:
                | {
                    id?: string | undefined;
                  }
                | undefined;
              description?: string | undefined;
              breadcrumb?:
                | {
                    id?: string | undefined;
                  }
                | undefined;
              inLanguage?: string | undefined;
              potentialAction?:
                | Array<{
                    type?: string | undefined;
                    target?: Array<string> | undefined;
                  }>
                | undefined;
            }>
          | undefined;
      }
    | undefined;
}

export interface Links {
  self?: Array<{ href: string }> | undefined;
  collection?: Array<{ href: string }> | undefined;
  about?: Array<{ href: string }> | undefined;
  author?: Array<{ embeddable: boolean; href: string }> | undefined;
  replies?: Array<{ embeddable: boolean; href: string }> | undefined;
  "version-history"?: Array<{ count: number; href: string }> | undefined;
  "predecessor-version"?: Array<{ id: number; href: string }> | undefined;
  "wp:featuredmedia"?: Array<{ embeddable: boolean; href: string }> | undefined;
  "wp:attachment"?: Array<{ href: string }> | undefined;
  "wp:term"?:
    | Array<{ taxonomy: string; embeddable: boolean; href: string }>
    | undefined;
  curies?:
    | Array<{ name: string; href: string; templated: boolean }>
    | undefined;
}

export interface Post {
  id: number;
  date: string;
  dateGmt: string;
  guid: Guid;
  modified: string;
  modifiedGmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featuredMedia: number | undefined;
  commentStatus: string;
  pingStatus: string;
  sticky: boolean;
  template?: string | undefined;
  format?: string | undefined;
  meta: Meta;
  categories: number[];
  tags: number[];
  classList: string[];
  yoastHead?: string | undefined;
  yoastHeadJson?: YoastHead | undefined;
  links?: Links | undefined;
}
