import type { IncomingPost } from "../../types/incomingPost";
import type { Post } from "../../types/post";

export const adaptPost = (incomingPost: IncomingPost): Post => {
  return {
    id: incomingPost.id,
    date: incomingPost.date,
    dateGmt: incomingPost.date_gmt,
    guid: { url: incomingPost.guid.rendered },
    modified: incomingPost.modified,
    modifiedGmt: incomingPost.modified_gmt,
    slug: incomingPost.slug,
    status: incomingPost.status,
    type: incomingPost.type,
    link: incomingPost.link,
    title: { text: incomingPost.title.rendered },
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
      recipeRoundupName: incomingPost.meta.wprmRecipeRoundupName,
      recipeRoundupDescription: incomingPost.meta.wprmRecipeRoundupDescription,
      footnotes: incomingPost.meta.footnotes,
    },
    categories: incomingPost.categories,
    tags: incomingPost.tags,
    classList: incomingPost.class_list,
    yoastHead: incomingPost.yoast_head,
    yoastHeadJson: {
      title: incomingPost.yoast_head_json.title,
      description: incomingPost.yoast_head_json.description,
      robots: {
        index: incomingPost.yoast_head_json.robots.index,
        follow: incomingPost.yoast_head_json.robots.follow,
        maxSnippet: incomingPost.yoast_head_json.robots.maxSnippet,
        maxImagePreview: incomingPost.yoast_head_json.robots.maxImagePreview,
        maxVideoPreview: incomingPost.yoast_head_json.robots.maxVideoPreview,
      },
      canonical: incomingPost.yoast_head_json.canonical,
      ogLocale: incomingPost.yoast_head_json.ogLocale,
      ogType: incomingPost.yoast_head_json.ogType,
      ogTitle: incomingPost.yoast_head_json.ogTitle,
      ogDescription: incomingPost.yoast_head_json.ogDescription,
      ogUrl: incomingPost.yoast_head_json.ogUrl,
      ogSiteName: incomingPost.yoast_head_json.ogSiteName,
      articlePublishedTime: incomingPost.yoast_head_json.articlePublishedTime,
      articleModifiedTime: incomingPost.yoast_head_json.articleModifiedTime,
      ogImage: incomingPost.yoast_head_json.ogImage.map((image) => ({
        width: image.width,
        height: image.height,
        url: image.url,
        type: image.type,
      })),
      author: incomingPost.yoast_head_json.author,
      twitterCard: incomingPost.yoast_head_json.twitterCard,
      twitterMisc: {
        escritoPor: incomingPost.yoast_head_json.twitterMisc.escritoPor,
        estTempoDeLeitura:
          incomingPost.yoast_head_json.twitterMisc.estTempoDeLeitura,
      },
      schema: {
        context: incomingPost.yoast_head_json.schema["@context"],
        graph: incomingPost.yoast_head_json.schema["@graph"].map(
          (graphItem) => ({
            type: graphItem["@type"],
            id: graphItem["@id"],
            url: graphItem.url,
            name: graphItem.name,
            isPartOf: { id: graphItem.isPartOf["@id"] },
            primaryImageOfPage: { id: graphItem.primaryImageOfPage["@id"] },
            image: { id: graphItem.image["@id"] },
            thumbnailUrl: graphItem.thumbnailUrl,
            datePublished: graphItem.datePublished,
            dateModified: graphItem.dateModified,
            author: { id: graphItem.author["@id"] },
            description: graphItem.description,
            breadcrumb: { id: graphItem.breadcrumb["@id"] },
            inLanguage: graphItem.inLanguage,
            potentialAction: graphItem.potentialAction.map((action) => ({
              type: action["@type"],
              target: action.target,
            })),
          })
        ),
      },
    },
    links: {
      self: incomingPost._links.self.map((link) => ({ href: link.href })),
      collection: incomingPost._links.collection.map((link) => ({
        href: link.href,
      })),
      about: incomingPost._links.about.map((link) => ({ href: link.href })),
      author: incomingPost._links.author.map((link) => ({
        embeddable: link.embeddable,
        href: link.href,
      })),
      replies: incomingPost._links.replies.map((link) => ({
        embeddable: link.embeddable,
        href: link.href,
      })),
      "version-history": incomingPost._links["version-history"].map((link) => ({
        count: link.count,
        href: link.href,
      })),
      "predecessor-version": incomingPost._links["predecessor-version"].map(
        (link) => ({ id: link.id, href: link.href })
      ),
      "wp:featuredmedia": incomingPost._links["wp:featuredmedia"].map(
        (link) => ({ embeddable: link.embeddable, href: link.href })
      ),
      "wp:attachment": incomingPost._links["wp:attachment"].map((link) => ({
        href: link.href,
      })),
      "wp:term": incomingPost._links["wp:term"].map((link) => ({
        taxonomy: link.taxonomy,
        embeddable: link.embeddable,
        href: link.href,
      })),
      curies: incomingPost._links.curies.map((link) => ({
        name: link.name,
        href: link.href,
        templated: link.templated,
      })),
    },
  };
};
