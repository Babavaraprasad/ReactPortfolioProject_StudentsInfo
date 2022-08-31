import classes from "./AddStudent.module.css";
import Card from "../UI/Card";
import {useRef} from 'react';


function AddStudent() {
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
