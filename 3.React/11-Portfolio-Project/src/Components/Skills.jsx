import { Code } from 'lucide-react';
import  Section from "./Section";
import Pills from './Pills';
const Skills =() =>{
    const skillTitles=["HTML","CSS","Java Script", "React","Tailwind CSS"];
    return <Section icon={<Code/>}sectionTitle="Skills">
        {skillTitles.map(title=> <Pills key={title} title={title}/>)}
</Section>

}

export default Skills;