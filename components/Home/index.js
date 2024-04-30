import ReactDOM from "react-dom";
import "./images/logo.svg"
import "./index.css";
import "./Sepline.css"
import "./Section2.css"
import "./Faq.css"
import "./Footer.css"
import Section2 from "./Section2";
import Faq from "./Faq";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Sepline} from "./Sepline";
function Home()
{

var a=ReactDOM.render(
<div>
    {<Navbar/>}
    {<Sepline/>}
    {<Section2/>}
    {<Sepline/>}
    {<Faq/>}
    {<Sepline/>}
    {<Footer/>}
    {<Sepline/>}
</div>,
document.getElementById("root")
);
return (<div>{a}
</div>
);
}
export default Home