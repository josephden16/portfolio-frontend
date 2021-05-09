import gql from "graphql-tag";
import client from "../apollo-client";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { fetchSocialLinks } from "../lib/api";


const seo = {
  metaTitle: 'Projects',
  metaDescription: 'Project Page. I showcase projects I\'ve worked on through out my career as a Fronted Devloper'
}


const Projects = ({ links, projects }) => {

  return (
    <>
      <Layout className="ml-3 mr-3 lg:ml-24 lg:mr-24 xl:ml-36 xl:mr-36 lg:mt-6 mb-10" seo={seo}>
        <div className="mb-32">
          <h1 className="mt-14 mb-12 lg:mb-16 lg:mt-12 text-3xl lg:text-4xl font-bold">My Projects 👨‍💻</h1>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {projects && projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
        <Footer twitterLink={links.twitter_link} githubLink={links.github_link} linkedinLink={links.linkedin_link} />
      </Layout>
    </>
  )
}


const fetchProjects = async () => {
  try {
    const { data } = await client.query({
      query: gql`
      query {
        projects {
          id
          name
          link
          description
          image {
            alternativeText
            url
          }
        }
      }
      `
    });

    return data;

  } catch (error) {
    return { projects: null };
  }
}


export async function getStaticProps() {
  const { homepage } = await fetchSocialLinks();
  const { projects } = await fetchProjects();
  return {
    props: {
      links: homepage,
      projects: projects
    }
  }
}

export default Projects;
