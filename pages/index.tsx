// import Link from 'next/link';
import client from '../apollo-client';
import { gql } from '@apollo/client';
import Layout from '../components/Layout';
import Footer from '../components/Footer';


export default function Home({ homepage }) {
  return (
    <div>
      <Layout className="ml-3 mr-3 lg:ml-24 lg:mr-24 xl:ml-36 xl:mr-36 lg:mt-6" seo={homepage.seo}>
        <div>
          <div className="mt-16 flex flex-col space-y-4 lg:space-y-0 sm:items-center sm:gap-3 sm:grid sm:grid-cols-2 lg:gap-20 lg:ml-10">
            <div>
              <img draggable={false} className="sm:m-auto w-full h-full" src="/illustration-2.svg" alt="hacker" />
            </div>
            <div>
              <h1 className="font-bold text-5xl mt-4 lg:mt-0 mb-8 text-center lg:text-left lg:text-6xl">Hi there! &#128075;</h1>
              <p className=" text-gray-600 text-center leading-7 sm:m-auto lg:leading-9 lg:text-left lg:w-4/5 lg:m-0 lg:text-lg">
                I am Denedo Oghenetega Joseph. Frontend Developer whose core focus is on design and efficiency. I enjoy transforming User Interface designs to code that's functional and easy to maintain.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-20 lg:grid lg:grid-cols-2 lg:items-center mb-10">
            <div>
              <h1 className="font-bold text-3xl mt-4 mb-6 text-center lg:text-left lg:text-4xl">My career so far</h1>
              <p className="text-gray-600 text-center leading-7 sm:w-3/4 sm:m-auto sm:mb-8 lg:leading-9 lg:text-left lg:w-4/5 lg:m-0 lg:text-lg">
                I am proficient with modern web development tools like React, Next.js, JAMStack and Firebase.
                I have interest in learning new things and an eagerness to work on challenging projects.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-6  items-center mt-14 mb-14">
                <TechSkill name="HTML" imageURL="/dev-icons/html.svg" />
                <TechSkill name="JavaScript" imageURL="/dev-icons/javascript.svg" />
                <TechSkill name="React" imageURL="/dev-icons/react.svg" />
                <TechSkill name="Firebase" imageURL="/dev-icons/firebase.svg" />
                <TechSkill name="Next.js" imageURL="/dev-icons/next-js.svg" />
                <TechSkill name="Strapi CMS" imageURL="/dev-icons/strapi.svg" />
              </div>
            </div>
          </div>
        </div>
        <Footer twitterLink={homepage.twitter_link} linkedinLink={homepage.linkedin_link} githubLink={homepage.github_link} />
      </Layout>
    </div>
  )
}

const TechSkill = ({ name, imageURL }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div>
        <img draggable={false} className="w-10 sm:w-12 lg:w-16" src={imageURL} alt={name} />
      </div>
      <h2 className="text-center text-sm text-gray-800 lg:text-base">{name}</h2>
    </div>
  )
}

const fetchHomepage = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Homepage {
          homepage {
            seo {
              metaTitle
              metaDescription
              shareImage {
                url
                alternativeText
              }
            }
            hero {
              title
            }
            github_link
            twitter_link
            linkedin_link
          }
        }
      
      `
    });

    return data;
  } catch (error) {
    return { homepage: null }
  }
}

export async function getStaticProps() {
  const homepage = {
    seo: {
      metaTitle: 'Projects',
      metaDescription: 'Projects Page',
      shareImage: {
        url: "https://res.cloudinary.com/tega/image/upload/v1620764798/64115475_padded_logo_8367a6b6c8.png",
        alternativeText: 'Denedo Joseph'
      }
    },
    twitter_link: 'https://x.com/tega_dev',
    github_link: 'https://github.com/josephden16',
    linkedin_link: 'https://www.linkedin.com/in/oghenetega-denedo'
  }
  return {
    props: {
      homepage
    }
  }
}
