import List from "./components/List"
function App() {

const studentArr=["kiran","jashan","Manpreet","Mandeep","gopi","Priya","sony"];

// const studentArr=[];

// let studentArr;
  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
</>
  )
}

export default App
