import classes from "./AddStudent.module.css";
import Card from "../UI/Card";
import {useRef} from 'react';


function AddStudent(props) {
//using useref from react which acts as an object that will refernce
//the current html element.

//to extract that reference value entered in the input we use varaible.current.value


    const usetitleRef=useRef();
    const usenameRef=useRef();
    const useageRef=useRef();
    const useemaileRef=useRef();
    const useaddressRef=useRef();
    const useimageRef=useRef(); 

    function onclicksubmit(event){
    event.preventDefault();
    const enteredtitle= usetitleRef.current.value;   
    const enteredname= usenameRef.current.value;  
    const enteredage= useageRef.current.value;  
    const enteredemail= useemaileRef.current.value;
    const enteredaddress= useaddressRef.current.value;  
    const enteredimage= useimageRef.current.value;
    
    const wholedata={
        title:enteredtitle,
        name:enteredname,
        age:enteredage,
        email:enteredemail,
        address:enteredaddress,
        image:enteredimage
    };
    console.log(wholedata);

   props.something(wholedata);
    }
     

  return (
    <Card>
      <form className={classes.form} onSubmit={onclicksubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>TITLE</label>
          <input type='text' required id='title' placeholder='Enter Title' ref={usetitleRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' placeholder='Attach Link' ref={useimageRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='Name'>NAME</label>
          <input type='text' required id='Name' placeholder='Enter Name' ref={usenameRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='Age'>AGE</label>
          <input type='text' required id='Age'placeholder='Enter Age' ref={useageRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' placeholder='Enter Email' ref={useemaileRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' placeholder='Enter Address' ref={useaddressRef}></input>
        </div>
       <div className={classes.actions}>
        <button>ADD</button>
       </div>
      </form>
    </Card>
  );
}

export default AddStudent;


/*after clicking on formsubmit, all the user entered input data is gathered using "useref" objects provided by react library and we store the current input values 
refernced in a variable and assign this data to different variabes in the form of a json format so we can send the json data to backend API which connects to database
to store the records and performs CRUD operations in database.backend development languages might be java,c#,node,js and a open source database like postgres sql.

Here what we simply do is that we make use of an open source google platform service "Firebase" which send the requests and handles the API calls,store and retrieve data
similar to using the backend languages.


how does it work?
we send the data to firebase api and we use an request which directly interacts with database
 where do we add http request?
we can add in this file where we write the function for onsubmit() or we can also do it in the file where 
current AddStudent.js is called that is Addnew.js 
To do that im passing a prop from addnew.js page and in this jsx file im binding the wholedata.
*/