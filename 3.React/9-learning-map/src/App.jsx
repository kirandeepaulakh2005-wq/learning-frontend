import List from "./components/List"
function App() {

const studentArr=["kiran","jashan","Manpreet","Mandeep","gopi","Priya","sony"];
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
