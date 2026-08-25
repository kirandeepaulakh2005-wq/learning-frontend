const SocialMedia = ({icon,title,url})=>{
     return <a className="flex text-blue-500 hover:text-blue-800 items-center " href={url}>
     {icon} 
     <span className="ml-2">{title}</span></a>;
}
export default SocialMedia;