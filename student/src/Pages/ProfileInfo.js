import InfoList from "../components/ProfileInfo/InfoList";
import image1 from "../components/ProfileInfo/pexels-buro-millennial-1438081.jpg";
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

/*function getstudentdata()
{
    fetch( 'https://react-studentsbiodata-default-rtdb.firebaseio.com/biodata.json' )
    .then(response => response.json) 
}
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