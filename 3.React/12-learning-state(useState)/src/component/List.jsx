const List = ({list}) =>{

  // if(!list || list.length === 0){
  //   return <h2>No Students are here</h2>
  // }
return (
<>
{!list || list.length === 0 ? <h2>No students here</h2>
                           : <h2>Here are the students</h2>}
{list && list.length>0 && <ol className="list-decimal ml-10 mt-5 text-xl">
{list.map(item =><li>{item}</li>)}
</ol>}
  </>
 );
}

export default List;