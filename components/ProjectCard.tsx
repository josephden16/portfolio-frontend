import { getStrapiMedia } from "../lib/media";

const ProjectCard = ({ project }) => {
  let imageURL = "";
  if (project.image.url) {
    imageURL = getStrapiMedia(project.image);
  }
  return (
    <div>
      <div>
        <img style={{width: "400px", height: "200px"}} src={imageURL || "/gray.png"} alt={project.name || "Project"} />
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-4 mb-3">{project.name || "Project Title"}</h1>
        <p className="mb-3">{project.description || "This is a description of the project where you give a short summary of what the project is about"}</p>
        <a href={project.link || "#"} target="_blank" rel="noreferrer" className="mt-2 font-bold flex space-x-2"><span>View project</span><img className="w-4" src="/angle-right.svg" alt="right" /></a>
      </div>
    </div>
  )
}


export default ProjectCard;
