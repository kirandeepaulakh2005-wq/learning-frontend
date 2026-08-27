import Section from "../Section";
import { Briefcase } from "lucide-react";
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce Platform",
      desc: "Developed a fully functional e-commerce platform with user authentication, product management, and payment integration.",
      techUsed: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          desc={project.desc}
          techUsed={project.techUsed}
        />
      ))}
    </Section>
  );
};

export default Projects;