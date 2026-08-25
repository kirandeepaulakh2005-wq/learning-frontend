import { Heart } from 'lucide-react';
import  Section from "./Section";
import List from './List';
const Hobbies =() =>{
    const hobbies = ["Web development and coding","Learning C++/DSA and computer science topics","Building projects","Playing Football"]
    return <Section icon={<Heart/>}sectionTitle="Hobbies & Interests">
      <List items={hobbies}/>  
</Section>;
}

export default Hobbies;
