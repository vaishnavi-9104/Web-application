import {useState} from "react";
import "./Profile.css";

function Profile()
{
    let[theme,setTheme]=useState({bgColor:"white",
    textColor:"black",});
    const changeTheme=(event)=>
    {
        if(event.target.checked)
        {
        setTheme({
        bgColor:"black",
        textColor:"white",
        });
        }
    else
    {
        setTheme({
            bgColor:"white",
            textColor:"black",
        });
    }
    };
    let[name,setName]=useState("Vaishnavi");
    let[image,setImage]=useState("https://tse4.mm.bing.net/th?id=OIP.U_aEGCECPNp257FKIrpuSAHaE8&pid=Api&P=0&h=180")
    let[email,setEmail]=useState("Vaishnavi9104@gmail.com");
    let[city,setCity]=useState("Hyderabad");
    const changeToSuraj=()=>
    {
        setName("Suraj");
        setImage(
            "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
          );
          setEmail("Suraj9104@gmail.com");
          setCity("Banglore");
    }  
    const changeToVaishnavi=()=>
    {
        setName("Vaishnavi");
        setImage(
            "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
          );
          setEmail("Vaishnavi9104@gmail.com");
          setCity("Hyderabad");
    };  
    
    
     
    return (
        <div className="flexbox" style={{backgroundColor:theme.bgColor,color:theme.textColor}}>
            <div className="imagecol">
                <img src={image} alt="this is a profile pic" />
            </div>
            <div className="data" >
                <dl>
                <dt>User Name</dt>
                <dd>
                        {name}
                </dd>
                <dt>Email</dt>
                <dd>
                        {email}
                </dd>
                <dt>User City</dt>
                <dd>
                        {city}
                </dd>
                <dt>Description</dt>
                <dd>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, labore laborum et molestias non minima explicabo obcaecati eligendi quos repellat repellendus velit eius quidem sint? Sunt animi in quia obcaecati dolore, eaque consequuntur quis veritatis ipsam reprehenderit temporibus minus? Nulla.
                </dd>
                
                <dd className="p-6 m-3">
                <div className="p-6 m-3 mx-3">
                    <button className="btn btn-outline-primary mx-3" onClick={changeToSuraj}>Male</button>
                
                    <button className="btn btn-outline-primary" onClick={changeToVaishnavi}>Female</button>
                </div></dd>
                <dd><input type="checkbox" onClick={changeTheme} class="mx-2"/>Click to change theme</dd>
                </dl>
            </div>
        </div>
    );
}
export default Profile;






