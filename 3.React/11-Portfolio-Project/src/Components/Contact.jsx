import { Globe } from 'lucide-react';
import  Section from "./Section";
import SocialMedia from './SocialMedia';
import {RiLinkedinBoxLine  } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTwitterLine} from "react-icons/ri";

const Contact =() =>{
  const socialLinks=[
    {icon:<RiLinkedinBoxLine /> ,title:"Linkedin" ,url:"https://www.linkedin.com/" },
    {icon:<RiGithubLine /> ,title:"Github",url:"https://github.com//"},
  {icon:<RiTwitterLine />, title:"Twitter",url:"https://x.com/"},
  ];
 return <div className="pb-6">
 <Section icon={<Globe/>}sectionTitle="Contact & Social Media">
<p className="text-gray-700  mb-4">
  Email:kirandeepaulakh2005@gmail.com<br />
  Phone:(+91) 8699615049
</p>
{socialLinks.map(social=><SocialMedia icon={social.icon} title ={social.title} url={social.url} />)}
</Section>
  </div>
}

export default Contact;