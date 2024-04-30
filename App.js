
import {Route,Routes} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";

// import Counter from "./components/Counter/Counter";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Signup from "./components/SignUp/Signup"
import Signin from "./components/SignIn/Signin";
import Navbar from "./components/Home/Navbar";
import Users from "./components/Users/user";
import { Sepline } from './components/Home/Sepline';
import Section2 from './components/Home/Section2';
import Faq from './components/Home/Faq';
import Footer from './components/Home/Footer.js';


function App()
{
    return (
        <div>
            <Nav/>
            <Routes>
                <Route  path="/home" element= {<> <Navbar/> <Sepline/> <Section2/> <Sepline/> <Faq/> <Sepline/> <Footer/> <Sepline/> </>}/>
                <Route  path="/profile" element={<Profile />}/>
                <Route  path="/users" element={<Users />}/>
                <Route  path="/signup" element={<Signup/>}/>
                <Route  path="/signin" element={<Signin />}/>
                <Route  path="/products" element={<Products />}/>
            </Routes>
        </div>
    )
}
export  default App;