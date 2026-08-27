import List from "./component/List"
function App() {

const studentArr=["kiran","jashan","Manpreet","Mandeep","gopi","Priya","sony"];

// const studentArr=[];

// let studentArr;
const onChangeHandler =(event) =>{
  if (event.key ==="Enter"){
  console.log(event.target.value);
  studentArr.push(event.target.value);
  console.log(studentArr);
  }
  // console.log(event.key)
}
  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
    <input type="text" placeholder="New student Name" onKeyDown={onChangeHandler} />
</>
  )
}

export default App