import client from "../../apollo-client";
import { gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { fetchSocialLinks } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { formatTime } from "../../lib/time";

const Article = ({ article, links }) => {
  if (!article) return null;

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const imageURL = getStrapiMedia(article.image);
  const lastUpdated: string = formatTime(article.updated_at);

  return (
    <Layout
      seo={seo}
      className="ml-3 mr-3 mb-10 lg:ml-24 lg:mr-24 xl:ml-36 xl:mr-36 lg:mt-6"
    >
      <div className="mt-10 lg:mt-20 lg:w-5/6 xl:w-2/3 lg:m-auto">
        <h1 className="text-3xl lg:text-3xl m-auto font-bold mb-10">
          {article.title}
        </h1>
        {lastUpdated && (
          <h3 className="mb-8 text-lg">Last updated: {lastUpdated}</h3>
        )}
        <div className="mt-3 mb-12">
          <img
            src={imageURL}
            draggable={false}
            className="m-auto w-full lg:h-96"
            alt={article.image.alternativeText}
          />
        </div>
        <div className="mb-24">
          <div>
            <ReactMarkdown
              className="lg:text-lg leading-7 lg:leading-8"
              children={article.content}
              allowDangerousHtml={true}
            />
          </div>
        </div>
      </div>
      <Footer
        twitterLink={links.twitter_link}
        githubLink={links.github_link}
        linkedinLink={links.linkedin_link}
      />
    </Layout>
  );
};

const fetchArticleSlug = async () => {
  const { data } = await client.query({
    query: gql`
      query Slug {
        articles {
          slug
        }
      }
    `,
  });

  return data;
};

const fetchArticle = async (slug: string) => {
  const { data } = await client.query({
    variables: {
      slug: slug,
    },
    query: gql`
      query Articles($slug: String!) {
        articles(where: { slug: $slug }) {
          id
          title
          updated_at
          content
          image {
            url
            alternativeText
          }
        }
      }
    `,
  });

  return data;
};

export async function getStaticPaths() {
  const { articles } = await fetchArticleSlug();
  return {
    paths: articles.map((article: { slug: string }) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { articles } = await fetchArticle(slug);
  const { homepage } = await fetchSocialLinks();
  return {
    props: {
      article: articles[0],
      links: homepage,
      revalidate: 1,
    },
  };
}

export default Article;
