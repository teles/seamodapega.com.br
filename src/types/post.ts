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
  recipeRoundupName: string;
  recipeRoundupDescription: string;
  footnotes: string;
}

interface YoastHead {
  title: string;
  description: string;
  robots: {
    index: string;
    follow: string;
    maxSnippet: string;
    maxImagePreview: string;
    maxVideoPreview: string;
  };
  canonical: string;
  ogLocale: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogSiteName: string;
  articlePublishedTime: string;
  articleModifiedTime: string;
  ogImage: Array<{
    width: number;
    height: number;
    url: string;
    type: string;
  }>;
  author: string;
  twitterCard: string;
  twitterMisc: {
    escritoPor: string;
    estTempoDeLeitura: string;
  };
  schema: {
    context: string;
    graph: Array<{
      type: string;
      id: string;
      url: string;
      name: string;
      isPartOf: {
        id: string;
      };
      primaryImageOfPage: {
        id: string;
      };
      image: {
        id: string;
      };
      thumbnailUrl: string;
      datePublished: string;
      dateModified: string;
      author: {
        id: string;
      };
      description: string;
      breadcrumb: {
        id: string;
      };
      inLanguage: string;
      potentialAction: Array<{
        type: string;
        target: Array<string>;
      }>;
    }>;
  };
}

export interface Links {
  self: Array<{ href: string }>;
  collection: Array<{ href: string }>;
  about: Array<{ href: string }>;
  author: Array<{ embeddable: boolean; href: string }>;
  replies: Array<{ embeddable: boolean; href: string }>;
  "version-history": Array<{ count: number; href: string }>;
  "predecessor-version": Array<{ id: number; href: string }>;
  "wp:featuredmedia": Array<{ embeddable: boolean; href: string }>;
  "wp:attachment": Array<{ href: string }>;
  "wp:term": Array<{ taxonomy: string; embeddable: boolean; href: string }>;
  curies: Array<{ name: string; href: string; templated: boolean }>;
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
  featuredMedia: number;
  commentStatus: string;
  pingStatus: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: number[];
  classList: string[];
  yoastHead: string;
  yoastHeadJson: YoastHead;
  links: Links[];
}
