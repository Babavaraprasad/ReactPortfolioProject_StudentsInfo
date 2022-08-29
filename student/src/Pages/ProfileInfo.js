import InfoList from "../components/ProfileInfo/InfoList";
const array1=[
    {id:"1",
    Image:"ddk",
    title:"This is the first student",
     name:"rafal",
     Age:"25",
     Email:"varaprasad@gmail.com",
     Address:"kokkedal,denmark,2980",
},
{
id:"2",
Image:"kjhkhk",
title:"This is the second student",
name:"Nikolaj",
Age:"31",
Email:"nikolaj@Itu.com",
Address:"Aarhus,denmark,4890",
}
]


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