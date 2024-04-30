import "./images/logo.svg"
import "./Navbar.css"
function Navbar() {
return (<div>
    <div class="main">
        <nav>
    <span>
    <img width="53px" src="file:///C:/Users/Dell/Desktop/81/netflix/assets/images/logo.svg" alt=""/>
    </span>
    <div>
    <button class="btn1">
        <select name="Select" id="language">
        <option value="english">English</option>
        <option value="telugu">తెలుగు</option>
        <option value="hindi">हिन्दी </option>
        <option value="chinese">中文</option>
        </select>
    </button>
    <button class="btn1 btn1-red-sm">Sign In</button>
    </div>
    </nav>
    <div class="box">
    </div>
    <div class="hero">
        <span>Enjoy big movies, hit series and more from $ 149.</span>
        <span>Join today. Cancel anytime.</span>
        <span>Ready to watch? Enter your email to create or restart your membership.</span>
        <div class="hero-buttons">
            <input type="text" placeholder="Email address"/>
            <button class="btn1 btn1-red">Get started</button>
        
        </div>
    </div>

    </div>
</div>);
}
export default Navbar;
