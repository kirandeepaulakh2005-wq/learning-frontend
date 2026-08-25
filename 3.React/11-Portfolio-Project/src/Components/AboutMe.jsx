import { User } from 'lucide-react';
import  Section from "./Section";

const AboutMe = () =>{

 return(
    <div className="mt-5"> <Section icon={<User/>} sectionTitle="AboutMe">

 <p>
I'm Kirandeep Kaur, a B.Tech Computer Science Engineering student with a strong interest in web development. I enjoy creating clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS.
I'm continuously improving my coding and problem-solving skills by working on projects and learning new technologies.
</p>
</Section>
</div>
 );
}
export default AboutMe;