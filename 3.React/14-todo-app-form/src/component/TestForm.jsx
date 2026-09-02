import { useRef } from "react";

const TestForm = () => {
    console.log("Painting form");
   
   
const firstName =useRef();
const lastName=useRef();
const dob =useRef();

    const submitHandler =(event) =>{ 
        event.preventDefault();
        console.log(firstName.current.value);
        console.log(lastName.current.value);
        console.log(dob.current.value);
     }

   
    
  return (
    <div>
        <form action="/submit-data" onSubmit={submitHandler}>
            <input type="text" ref={firstName} placeholder="First Name" name="firstName" />
            <br />
            <input type="text" ref={lastName} placeholder="Last Name" name="lastName" />
            <br />
            <label htmlFor="dob">DOB</label>
            <input id="dob" type ="date" ref={dob} name="dob" />
            <br />
            <input type="submit"/>

        </form>
    </div>
  );
}

export default TestForm;