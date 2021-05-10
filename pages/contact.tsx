import client from "../apollo-client";
import { gql } from '@apollo/client';
import Layout from "../components/Layout";
import { fetchSocialLinks } from "../lib/api";


const Contact = ({ links }) => {
  const seo = {
    metaTitle: 'Contact',
    metaDescription: 'Contact Denedo Joseph',
  }

  return (
    <Layout className="ml-3 mr-3 mb-10 lg:ml-24 lg:mr-24 xl:ml-36 xl:mr-36 lg:mt-6" seo={seo}>
      <div>
        <div className="mt-8 flex flex-col space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:ml-10">
          <div>
            <img draggable={false} className="sm:m-auto sm:w-1/2 lg:w-full w-full h-full" src="/contact.svg" alt="contact me" />
          </div>
          <div className="flex flex-col space-y-5 xl:space-y-5">
            <h1 className="font-bold text-2xl mt-4 mb-6 lg:mb-4 text-center lg:text-left lg:text-3xl">Let's stay in touch 👉👈</h1>
            <div>
              <p className="text-gray-600 text-center leading-7 sm:w-1/2 sm:m-auto sm:mb-8 lg:leading-8 lg:text-left lg:w-4/5 lg:m-0 lg:text-base">
                I am available for short term projects and internships, you can reach out to me with the links below. I reply in less than 24 hours.
              </p>
              <div className="grid grid-cols-1 place-items-center lg:place-items-start sm:grid-cols-2 gap-8 mt-5 mb-24 xl:mb-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-lg font-bold">E-mail</h2>
                  <a target="_blank" className="underline text-gray-700 text-sm" href="mailto:denedojoe16@gmail.com">denedojoe16@gmail.com</a>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-lg font-bold">WhatsApp</h2>
                  <a target="_blank" className="underline text-gray-700 text-sm" href="https://api.whatsapp.com/send?phone=2347040936331">+2347040936331</a>
                </div>
              </div>
              <div className="w-full justify-center lg:justify-start space-x-5 flex flex-row">
                <a target="_blank" rel="external" href={links.twitter_link}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/twitter.svg" alt="twitter" /></a>
                <a target="_blank" rel="external" href={links.github_link}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/github.svg" alt="github" /></a>
                <a target="_blank" rel="external" href={links.linkedin_link}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/linkedin.svg" alt="linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { homepage } = await fetchSocialLinks();

  return {
    props: {
      links: homepage
    }
  }
}

export default Contact;
