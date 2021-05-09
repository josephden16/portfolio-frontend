const Footer = ({ twitterLink, githubLink, linkedinLink }) => {
  return (
    <>
      <div className="w-full mt-10 lg:mt-40 mb-14 justify-center space-x-5 lg:space-x-8 flex flex-row items-center text-center">
        <a target="_blank" rel="noreferrer" href={twitterLink || "#"}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/twitter.svg" alt="twitter" /></a>
        <a target="_blank" rel="noreferrer" href={githubLink || "#"}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/github.svg" alt="github" /></a>
        <a target="_blank" rel="noreferrer" href={linkedinLink || "#"}><img className="w-8 transition-opacity hover:opacity-80" src="/social-icons/linkedin.svg" alt="linkedin" /></a>
      </div>
      <p className="text-center text-sm text-gray-700 mb-3">
        Copyright © 2021 Denedo Oghenetega Joseph
      </p>
    </>
  )
}


export default Footer;
