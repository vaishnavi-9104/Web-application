import "./signin.css"
function Signin()
{
    return (
    <div class="signup">  
<div class="card">
    <div class="container">
        <div class="title">Login </div>
        <label for="password" class="form-label ms-3">Username:</label>
        <div class="row">
        <div class="col p-3 m-3 pt-0">
            <input type="text" class="form-control" placeholder="Enter your username or mail id" />
        </div>
</div>
        <label for="password" class="form-label ms-3">Password:</label>
        <div class="row my-3 ms-3 me-3">
            <input type="password" class="form-control" placeholder="Enter Your Password"/>
        </div>
    </div>
    <div class="row mx-auto my-5 p-auto flex">
        <div class="col m-auto p-auto"><button class="btn btn-outline-danger">Login</button></div>
    
        <div class="col m-auto p-auto"><button class="btn btn-outline-light">Cancel</button></div>
    </div>
    </div>
</div>)
};
export default  Signin; 