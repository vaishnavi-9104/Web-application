import "./user.css";
import axios from "axios";
import {useState} from "react";
function Users()
{
    let [users,setUsers]=useState([]);
    const getUsers=()=>
    {
        // alert("Working");
        axios.get("https://randomuser.me/api/?results=50")
        .then((usersdata)=>{
            console.log(usersdata.data.results);
            setUsers(usersdata.data.results);
        })
        .catch((errordata)=>{
            console.log(errordata);
        })
    };
    return (<div className="usersContainer">
        <h1>Users</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolore eius. Aut, recusandae dolores autem similique adipisci vitae quas iure corporis quidem facilis alias inventore? Facere perspiciatis ad molestias ipsum.</p>

        <button class="btn btn-outline-success" onClick={getUsers}>Get users data</button>
<div className="mt-5 m-auto">
    {users.length > 0 ? (
                 <table className="table table-hover">
             <thead className="table-dark">
                 <tr>
                     <th>ID</th>
                     <th>IMAGE</th>
                     <th>NAME</th>
                     <th>GENDER</th>
                     <th>EMAIL ID</th>
                 </tr>
             </thead>
             <tbody>
             {             
              users.map(function(user,index){return(
                 <tr>
                     <td>
                         {index+1}
                     </td>
                     <td>
                       <img src={user.picture.medium} alt={"name234"} width={70} height={70}/>
                    </td>
                    <td>
                        {user.name.first} {user.name.last}
                    </td>
                    <td>
                        {user.gender}
                    </td>
                    <td>
                        {user.email}
                    </td>
                </tr>
              );
              })}

            </tbody>
            </table>
    ) : (
        <div className="mt-5 text-center text-danger">
            <h2>No User Data to display</h2>
            </div>
    )}
 </div>

</div>
);
}
export  default Users;





















