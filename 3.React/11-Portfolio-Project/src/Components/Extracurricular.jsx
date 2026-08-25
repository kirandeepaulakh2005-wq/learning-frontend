import {Award } from 'lucide-react';
import  Section from "./Section";
import List from './List';
const Extracurricular =() =>{
    const items=["Participating in coding/web-development projects","Participating in workshops"," Attending technical training/internships", "Participating in college events","Participating in sports or fitness activities"," Participating in group discussions"]
    return <Section icon={<Award/>}sectionTitle="Extracurricular Activities">
    <List items={items}/>
</Section>;
}

export default Extracurricular;