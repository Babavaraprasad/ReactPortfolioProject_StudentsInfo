import classes from './InfoList.module.css';
import InfoRecord from './InfoRecord';
function InfoList(props)
{
    return (
        <ul className={classes.list}>
      {props.info.map(
        (element)=><InfoRecord
         key={element.id}
         image={element.Image}
         title={element.title}
         name={element.name}
         age={element.Age}
         email={element.Email}
         address={element.Address}
         />
        
      )}
      </ul>
    )
};
export default InfoList;