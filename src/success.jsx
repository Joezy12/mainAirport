

function Success(prop) {
    return (
        <div className="container">
            <div className="box">
                <h1>Enter OTP code</h1>
                 <p>We sent a one-time-passcode to your phone number/email associated with this card</p>
                 <div className="card-input">
                   <input type="number"  placeholder="12345" name="code" onChange={prop.getData2}/>
                 </div>
                 <button className="check" onClick={prop.handleSubmit2}>Verify</button>
            </div>
        </div>
    )
}

export default Success;