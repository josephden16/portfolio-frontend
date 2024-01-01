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
        projects(sort: "rank") {
          id
          name
          link
          rank
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


const projects = [
  {
    "id": "1",
    "name": "ZeepDash",
    "link": "https://zeepdash.vercel.app",
    "rank": null,
    "description": "Zeepdash is a user - friendly hobby food ordering web app, streamlining the culinary experience.With a clean interface, it enables seamless menu browsing, and order placement, ensuring delightful and efficient food exploration.",
    "image": {
      alternativeText: 'ZeepDash',
      url: 'https://res.cloudinary.com/tega/image/upload/v1704114065/zeepdash.vercel.app__psvthc.png'
    }
  },
  {
    "id": "2",
    "name": "YouTube Clone",
    "link": "https://youtubecloneapp.vercel.app",
    "rank": null,
    "description": "An attempt at building some of the core features on YouTube. I made use of React for building the Frontend and Firebase for backend services like authentication and the database.",
    "image": {
      alternativeText: 'YouTube Clone Project',
      url: 'https://res.cloudinary.com/tega/image/upload/v1620764885/Screenshot_from_2021_05_08_18_54_02_3fae40238e.jpg'
    }
  },
  {
    "id": "3",
    "name": "Ip Address Tracker",
    "link": "https://ip-address-tracker-app.netlify.app",
    "rank": null,
    "description": "An IP address tracker web app that displays information about a particular IP address like its location, timezone e.tc...",
    "image": {
      alternativeText: 'IP Address Tracker Project',
      url: 'https://res.cloudinary.com/tega/image/upload/v1620764847/Screenshot_from_2021_05_08_19_36_16_726a1c4ef3.jpg'
    }

  },
  {
    "id": "4",
    "name": "REST Countries API Project",
    "link": "https://rest-countries-app.netlify.app",
    "rank": null,
    "description": "I built this project after learning Vue.js, it consumes the rest countries api and displays vital information about different countries and has features for searching and filtering.",
    "image": {
      alternativeText: 'REST Countries API Project',
      url: 'https://res.cloudinary.com/tega/image/upload/v1620764904/Screenshot_from_2021_05_08_18_57_05_99f4a55ecf.jpg'
    }
  },
]

export async function getStaticProps() {
  const links = {
    twitter_link: 'https://twitter.com/tega_dev',
    github_link: 'https://github.com/josephden16',
    linkedin_link: 'https://www.linkedin.com/in/oghenetega-denedo'
  }

  return {
    props: {
      links: links,
      projects: projects
    }
  }
}

export default Projects;
