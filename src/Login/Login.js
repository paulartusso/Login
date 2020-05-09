import React, {useEffect, useRef} from "react";
import "../App.css";

const Login = () =>{

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <span className="buttons-span">
                <button className="sign">Sign Up</button>
                <button className="log">Log In</button>
            </span>
            <h1 className="h1">
                Sign Up for Free
            </h1>
            <span className="all-inputs-span">
                <span className="tiny-inp-span">
                    <input ref={inputRef} placeholder="First Name" className="tiny-inp"></input>
                    <input placeholder="Last Name" className="tiny-inp"></input>
                </span>
                <input placeholder="Email Address"></input>
                <input placeholder="Set A Password"></input>
            </span>
            <button className="start-button">GET STARTED</button>
        </div>
    )
}

export default Login;