import AddStudent from '../components/ProfileInfo/AddStudent';

function AddNew()
{
   function addstudentdatahandler(wholedata){
   fetch('https://react-studentsbiodata-default-rtdb.firebaseio.com/biodata.json',
   {
    method:'POST',
    body:JSON.stringify(wholedata),
    headers:
    {'Content-Type':'application/json'
    }
   });
   }

    return (
    <section>
        <h1>Add new student</h1>
        <AddStudent something={addstudentdatahandler}/>
        </section>
    )
};
export default AddNew;
/*here prop something will be sent to Addstudent component where data is being binded in the form of
json and we are calling function named 'addstudentdatahandler'

here the above function will be sending the http request using inbulit javascript function 'fetch'
we can also use axios package in the react library to send http requests.

for instance, above for the fetch function we use the firebase real time database 
url and we can also add some extra url which represents folder or table in database.
ex:https://react-studentsbiodata-default-rtdb.firebaseio.com/studentsbiodata.json'

note:at the end we need to add .json extension which is required for firebase

to insert the data we use POST request,to do it we add second argument in fetch which is an object
which configures the fetch function call and we define the properties inside the object.

properties to be defined inside second argument object fetch  are:
1)methods/HTTP verbs(GET,POST,PUT,DELETE)
2)Body -will be in json format & stringify converts arrays,values,expressions,strings to json data
3)
*/
