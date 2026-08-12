import style from './App.module.css';
import Container from './Container';
function App() {


  return (
    <>
    <Container>
    <h1 className={style.heading}>hello</h1>
    <p className={`${style.para} ${style.heading}`}>
      This is my paragraph.
    </p>
    </Container>
   <Container>
    <p>This is random text.</p>
   </Container>
    <h1 className={style.heading}>hello</h1>
    <p className={`${style.para} ${style.heading}`}>
      This is my paragraph.
    </p>
    </>
  )
}

export default App;
