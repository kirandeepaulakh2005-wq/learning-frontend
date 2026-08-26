import  Section from "../Section";
import { Briefcase } from 'lucide-react';
import Project from "./Project";
const Projects =() =>{
    const projectList=[
        {title:"E-Commerce Platform",desc:"Developed a fully e-commerce platform with user autthentication,product management,and payment integration.",techUsed:["React","Node.js","MonDb"],

        },
    ];

    return (
    <Section icon={<Briefcase/>}sectionTitle="Projects">
{projectList.map(project => <project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
</Section>
    );
}

export default Projects; 