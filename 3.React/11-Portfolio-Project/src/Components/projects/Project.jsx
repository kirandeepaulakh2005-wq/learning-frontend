const Project =( {title,desc,techUsed})=>{
    return <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm text-gray-700 mb-4">{desc}</p> 
    
    {techUsed.map(tech=> <TechPill title={tech}/>)}
    </div>
}
export default Project;