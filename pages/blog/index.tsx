import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import { getStrapiMedia } from "../../lib/media";
import Link from "next/link";
import { fetchSocialLinks } from "../../lib/api";


const seo = {
  metaTitle: 'Blog',
  metaDescription: 'Blog. Welcome to my blog. I share the experiences I\'ve gotten from my career as a Software Devloper and life',
}

const Blog = ({ articles, links }) => {
  if (!articles) return null;
  return (
    <Layout seo={seo} className="ml-3 mr-3 mb-10 lg:ml-24 lg:mr-24 xl:ml-36 xl:mr-36 lg:mt-6">
      {/* <h1 className="text-center font-bold text-3xl mt-10 mb-10">Welcome to my blog</h1> */}
      <h2 className="text-left font-bold text-3xl lg:text-4xl mt-10">Recent Articles 📰</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 space-y-4 lg:space-y-0 mt-10 lg:grid grid-cols-4 lg:gap-3">
        {articles.map((article: any) => <Card key={article.id} article={article} />)}
      </div>
      <Footer twitterLink={links.twitter_link} githubLink={links.github_link} linkedinLink={links.linkedin_link} />
    </Layout>
  )
}


const Card = ({ article }) => {
  const imageURL = getStrapiMedia(article.image);

  return (
    <div className="flex flex-col w-4/5 m-0 sm:w-auto lg:w-auto">
      <div>
        <Link href={`/blog/${article.slug}`}>
          <a>
            <img draggable={false} className="w-full hover:opacity-95 transition-opacity duration-500" src={imageURL} alt={article.image.alternativeText} />
          </a>
        </Link>
      </div>
      <div className="space-y-3 mt-3">
        <Link href={`/blog/${article.slug}`}>
          <a className="hover:underline font-bold text-2xl">{article.title}</a>
        </Link>
        <p>
          {article.content.slice(0, 120) + "..."}
        </p>
      </div>
    </div>
  )
}


const fetchArticles = async () => {
  const { data } = await client.query({
    query: gql`
      query Articles {
        articles(limit: 5,  where:{status: "published"}) {
          id
          title
          created_at
          content
          slug
          image {
            url
            alternativeText
          }
        }
      }
    `,
  });

  const { articles } = data;

  return articles;
}


export async function getStaticProps() {
  const articles = await fetchArticles();
  const { homepage } = await fetchSocialLinks();

  return {
    props: { articles: articles, links: homepage },
    revalidate: 1,
  }
}

export default Blog;
