import "./signup.css"
// import "./assets"
function Signup()
{
    return (
        <div class="signup">
    <div class="card">
        <div class="container">
            <div class="title">SignUp </div>
            <label for="password" class="form-label ms-3">Name:</label>
            <div class="row">
            <div class="col p-3 m-3 pt-0">
                <input type="text" class="form-control" placeholder="First Name"/>
            </div>
            <div class="col p-3 m-3 pt-0">
                <input type="text" class="form-control" placeholder="Last Name"/>
            </div>
</div>
            <label for="password" class="form-label ms-3">Password:</label>
            <div class="row my-3 ms-2 me-2">
                <input type="password" class="form-control" placeholder="Enter Your Password"/>
            </div>
            <div class="row my-3 ms-2 me-2">
                <input type="password" class="form-control m" placeholder="Confirm Your Password"/>
            </div>
            <label for="gender" class="form-label ms-3">Gender:</label>
            <div class="row m-auto">
                <div class="col ms-5 radio">
                <input type="radio" name= "gender" value="male"/>Male</div>
                <div class="col me-5 radio">
                <input type="radio" name="gender" value="female"/>  Female</div>
            </div>
            
        </div>
        <div class="row mx-auto my-3 p-auto flex">
            <div class="col m-auto p-auto"><button class="btn btn-outline-danger">SignUp</button></div>
        
            <div class="col m-auto p-auto"><button class="btn btn-outline-light">Cancel</button></div>
        </div>
        </div>
    </div>
    );
};
export default Signup;