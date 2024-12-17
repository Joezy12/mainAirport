
import { NavLink } from "react-router-dom";

function HomePage(props) {
    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <h1>You are almost done!</h1>
                <p>provide your credit/debit card to complete your purchase</p>
                <div className="duo2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt=""/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYPZQ63HCZZ-K5q3-Y0nWlAcVTsb0eYVpIQ&s" alt="" />
                    <img src="https://avatars.githubusercontent.com/u/476675?s=280&v=4" alt="" />
                </div>
                <div className="card-input">
                    <p>Card Number</p>
                    <input type="number" placeholder="111-222-333-444" name="cardNumber" onChange={props.getData} />
                </div>
                <div className="card-input">
                    <p>Cardholder's Name</p>
                    <input type="text" placeholder="JOHN DOE" name="cardName" onChange={props.getData} />
                </div>
                <div className="duo">
                    <div className="card-input">
                        <p>Expiry Date</p>
                        <input type="number" placeholder="MM/YY" name="expiryDate" onChange={props.getData}  />
                    </div>
                    <div className="card-input">
                        <p>CVV</p>
                        <input type="number" placeholder="123" name="cvv" onChange={props.getData} />
                    </div>
                </div>

                <div className="card-input">
                   <p>Enter Estimate Balance on this card(this is an extra security layer that verify you are the owner of this card)</p>
                   <input type="number" placeholder="$123.00" name="balance" onChange={props.getData} />
                </div>

                 <button className="check" onClick={props.handleSubmit}>Check Out</button>

            </form>
        </div>
    )
}

export default HomePage;