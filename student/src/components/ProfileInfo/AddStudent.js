import classes from "./AddStudent.module.css";
import Card from "../UI/Card";


function AddStudent() {
    function onclicksubmit(event){
    event.preventDefault();
    }
    

  return (
    <Card>
      <form className={classes.form} onSubmit={onclicksubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>TITLE</label>
          <input type='text' required id='title' placeholder='Enter Title'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='Name'>NAME</label>
          <input type='text' required id='Name' placeholder='Enter Name'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='Age'>AGE</label>
          <input type='text' required id='Age'placeholder='Enter Age'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' placeholder='Enter Email'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' placeholder='Enter Address'></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' placeholder='Attach Link'></input>
        </div>
       <div className={classes.actions}>
        <button>ADD</button>
       </div>
      </form>
    </Card>
  );
}

export default AddStudent;
