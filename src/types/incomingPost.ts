export interface IncomingGuid {
  rendered: string;
}

export interface IncomingTitle {
  rendered: string;
}

export interface IncomingContent {
  rendered: string;
  protected: boolean;
}

export interface IncomingExcerpt {
  rendered: string;
  protected: boolean;
}

export interface IncomingMeta {
  wprmRecipeRoundupName?: string;
  wprmRecipeRoundupDescription?: string;
  footnotes?: string;
}

export interface IncomingYoastHeadJson {
  title?: string;
  description?: string;
  robots?:
    | {
        index?: string;
        follow?: string;
        maxSnippet?: string;
        maxImagePreview?: string;
        maxVideoPreview?: string;
      }
    | undefined;
  canonical?: string;
  ogLocale?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  ogImage?: Array<{
    width?: number;
    height?: number;
    url?: string;
    type?: string;
  }>;
  author?: string;
  twitterCard?: string;
  twitterMisc?: {
    escritoPor?: string;
    estTempoDeLeitura?: string;
  };
  schema?: {
    "@context"?: string;
    "@graph"?: Array<{
      "@type"?: string;
      "@id"?: string;
      url?: string;
      name?: string;
      isPartOf?: {
        "@id"?: string;
      };
      primaryImageOfPage?: {
        "@id"?: string;
      };
      image?: {
        "@id"?: string;
      };
      thumbnailUrl?: string;
      datePublished?: string;
      dateModified?: string;
      author?: {
        "@id"?: string;
      };
      description?: string;
      breadcrumb?: {
        "@id"?: string;
      };
      inLanguage?: string;
      potentialAction?: Array<{
        "@type"?: string;
        target?: Array<string>;
      }>;
    }>;
  };
}

export interface IncomingLinks {
  self?: Array<{ href: string }>;
  collection?: Array<{ href: string }>;
  about?: Array<{ href: string }>;
  author?: Array<{ embeddable: boolean; href: string }>;
  replies?: Array<{ embeddable: boolean; href: string }>;
  "version-history"?: Array<{ count: number; href: string }>;
  "predecessor-version"?: Array<{ id: number; href: string }>;
  "wp:featuredmedia"?: Array<{ embeddable: boolean; href: string }>;
  "wp:attachment"?: Array<{ href: string }>;
  "wp:term"?: Array<{ taxonomy: string; embeddable: boolean; href: string }>;
  curies?: Array<{ name: string; href: string; templated: boolean }>;
}

export interface IncomingPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: IncomingGuid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: IncomingTitle;
  content: IncomingContent;
  excerpt: IncomingExcerpt;
  author: number;
  featured_media?: number | undefined;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template?: string;
  format?: string;
  meta: IncomingMeta;
  categories: number[];
  tags: number[];
  class_list: string[];
  yoast_head?: string;
  yoast_head_json?: IncomingYoastHeadJson;
  _links: IncomingLinks;
}
