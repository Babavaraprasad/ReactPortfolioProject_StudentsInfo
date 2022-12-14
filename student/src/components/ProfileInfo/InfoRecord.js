import Card from "../UI/Card";
import classes from "./InfoRecord.module.css";

function InfoRecord(props) {
  return (
        <li className={classes.item}>
           <Card>
          <div className={classes.image}>
              <img src={props.image} alt="Image not found" />
          </div>
       
          <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>Name of student:{props.name}</p>
              <p>Age:{props.age}</p>
              <p>Email account:{props.email}</p>
              <address>Address:{props.address}</address>
              <p></p>
          </div>
          <div className={classes.actions}>
              <button>
                  Shortlist individual
              </button>
          </div>
          <br/>
          <br/>
          </Card>
      </li>
  );
}
export default InfoRecord;
