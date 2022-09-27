import InfoList from "../components/ProfileInfo/InfoList";
import image1 from "../components/ProfileInfo/pexels-buro-millennial-1438081.jpg";
import { useState } from "react";

const array1=[
    {id:"1",
    Image:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg",
    title:"This is the first student",
     name:"holland",
     Age:"25",
     Email:"holland@gmail.com",
     Address:"kokkedal,denmark,2980",
},
{
id:"2",
Image:"https://upload.wikimedia.org/wikipedia/commons/8/83/Saoirse_Ronan_cropped2.jpg",
title:"This is the second student",
name:"rosie",
Age:"31",
Email:"rosie@Itu.com",
Address:"Aarhus,denmark,4890",
},

{
    id:"3",
    Image:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Landlite_Hungary_est_1993_IMG_1443.JPG",
    title:"This is the third student",
    name:"Nikolaj",
    Age:"31",
    Email:"nikolaj@Itu.com",
    Address:"Aarhus,denmark,4890",
    }
]
function Getstudentdata()
{
    const [Isloading,setIsloading]=useState(true);

    fetch( 'https://react-studentsbiodata-default-rtdb.firebaseio.com/biodata.json' )
    .then(response => response.json())
    .then((data)=>{setIsloading(false);})
    .catch(error=>{console.log(error);}) 

    if(Isloading){
        return(<section><p>Loading...</p></section>);
    }
}
/*
here we are using fetch API to connect to the firebase. It has two parameters one is for request and the promise.
fetch(request, promise)
here promise will consists of the response object to receive the data.
we have multiple methods to read the data from the response object using text(),blob(),rawbody(),Array() methods. for instance using an arrow function where input
is response and we are outputting the content in that response (response=>response.text())

so what happens in the process of retrieving data from firebase, should the layout of component display data or wait for its receiving.
1)can we use async javascript function ? and use await ? --doesnt work out here for use  components.
2)so we can use react states to display the message isloiading when data is not ready yet or we can set the state to false when data is loaded.
*/
function ProfileInfo(props)
{
    return (
   <section>
    <h1>Students Profile Information</h1>
        <InfoList info={array1}/>
        </section>

    )
};
export default ProfileInfo;