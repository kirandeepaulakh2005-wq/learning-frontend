const List = ({list}) =>{

return (
<>
<ol className="list-decimal ml-10 mt-5 text-xl">
{list.map(item =><li>{item}</li>)}
</ol>

<ol className="list-decimal ml-10 mt-5 text-xl">
{[<li>kiran</li>,<li>Jashan</li>,<li>Manpreet</li>,<li>Mandeep</li>]}
</ol>
  </>
 );
}

export default List;