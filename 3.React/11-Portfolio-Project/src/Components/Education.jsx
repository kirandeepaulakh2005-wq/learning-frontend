import { BookOpen } from 'lucide-react';
import  Section from "./Section";
import Graduation from './Graduation';
const Education =() =>{
    return <Section icon={<BookOpen/>}sectionTitle="Education">
    <Graduation title="Bachelor of Science in Computer Science" school="MIMIT,Malout" year="2023-2027"/>
</Section>;
}

export default Education;