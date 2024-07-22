import type { IncomingPost } from "../../types/incomingPost";
import type { Post } from "../../types/post";

export const adaptPost = (incomingPost: IncomingPost): Post => {
  return {
    id: incomingPost.id,
    date: incomingPost.date,
    dateGmt: incomingPost.date_gmt,
    guid: {
      url: incomingPost.guid.rendered,
    },
    modified: incomingPost.modified,
    modifiedGmt: incomingPost.modified_gmt,
    slug: incomingPost.slug,
    status: incomingPost.status,
    type: incomingPost.type,
    link: incomingPost.link,
    title: {
      text: incomingPost.title.rendered,
    },
    content: {
      html: incomingPost.content.rendered,
      isProtected: incomingPost.content.protected,
    },
    excerpt: {
      html: incomingPost.excerpt.rendered,
      isProtected: incomingPost.excerpt.protected,
    },
    author: incomingPost.author,
    featuredMedia: incomingPost.featured_media,
    commentStatus: incomingPost.comment_status,
    pingStatus: incomingPost.ping_status,
    sticky: incomingPost.sticky,
    template: incomingPost.template,
    format: incomingPost.format,
    meta: {
      recipeRoundupName: incomingPost.meta?.wprmRecipeRoundupName,
      recipeRoundupDescription: incomingPost.meta?.wprmRecipeRoundupDescription,
      footnotes: incomingPost.meta?.footnotes,
    },
    categories: incomingPost.categories,
    tags: incomingPost.tags,
    classList: incomingPost.class_list,
    yoastHead: incomingPost.yoast_head,
    // yoastHeadJson: incomingPost.yoast_head_json
    //   ? {
    //       title: incomingPost.yoast_head_json.title,
    //       description: incomingPost.yoast_head_json.description,
    //       robots: incomingPost.yoast_head_json.robots
    //         ? {
    //             index: incomingPost.yoast_head_json.robots.index,
    //             follow: incomingPost.yoast_head_json.robots.follow,
    //             maxSnippet: incomingPost.yoast_head_json.robots.maxSnippet,
    //             maxImagePreview:
    //               incomingPost.yoast_head_json.robots.maxImagePreview,
    //             maxVideoPreview:
    //               incomingPost.yoast_head_json.robots.maxVideoPreview,
    //           }
    //         : undefined,
    //       canonical: incomingPost.yoast_head_json.canonical,
    //       ogLocale: incomingPost.yoast_head_json.ogLocale,
    //       ogType: incomingPost.yoast_head_json.ogType,
    //       ogTitle: incomingPost.yoast_head_json.ogTitle,
    //       ogDescription: incomingPost.yoast_head_json.ogDescription,
    //       ogUrl: incomingPost.yoast_head_json.ogUrl,
    //       ogSiteName: incomingPost.yoast_head_json.ogSiteName,
    //       articlePublishedTime:
    //         incomingPost.yoast_head_json.articlePublishedTime,
    //       articleModifiedTime: incomingPost.yoast_head_json.articleModifiedTime,
    //       ogImage: incomingPost.yoast_head_json.ogImage,
    //       author: incomingPost.yoast_head_json.author,
    //       twitterCard: incomingPost.yoast_head_json.twitterCard,
    //       twitterMisc: incomingPost.yoast_head_json.twitterMisc,
    //       schema: incomingPost.yoast_head_json.schema
    //         ? {
    //             context: incomingPost.yoast_head_json.schema["@context"],
    //             graph: incomingPost.yoast_head_json.schema["@graph"],
    //           }
    //         : undefined,
    //     }
    //   : undefined,
    links: incomingPost._links
      ? {
          self: incomingPost._links.self,
          collection: incomingPost._links.collection,
          about: incomingPost._links.about,
          author: incomingPost._links.author,
          replies: incomingPost._links.replies,
          "version-history": incomingPost._links["version-history"],
          "predecessor-version": incomingPost._links["predecessor-version"],
          "wp:featuredmedia": incomingPost._links["wp:featuredmedia"],
          "wp:attachment": incomingPost._links["wp:attachment"],
          "wp:term": incomingPost._links["wp:term"],
          curies: incomingPost._links.curies,
        }
      : undefined,
  };
};
