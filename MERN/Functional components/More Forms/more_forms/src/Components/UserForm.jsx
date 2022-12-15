import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [UsernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [emailError, setEmailError] = useState("");


    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("User is required!");
        } else if(e.target.value.length < 3) {
            setUsernameError("User must be 3 characters or longer!");
        } else {
            setUsernameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email must not be empty!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password must not be empty");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be more than 3 characters");
        } else {
            setPasswordError("");
        }
    }
    const handleconfirmPassword = (e) => {
        setconfirmpassword(e.target.value);
        if(e.target.value.length < 1) {
            setconfirmpasswordError("Password not empty");
        } else if(e.target.value.length < 8) {
            setconfirmpasswordError("Password must be 3 characters or longer!");
        } else if(e.target.value !== password){
        setconfirmpasswordError("Password must Match !!");
        }
        
        else {
            setconfirmpasswordError("");
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmpassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    
    return (
        <form onSubmit={ createUser }>
            <h3>{ formMessage() }</h3>
	    <div>
                <label>Username: </label> 
                <input type="text" onChange={ handleUsername} />
                {
                    UsernameError ?
                    <p style={{color:'red'}}>{ UsernameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={handleconfirmPassword} />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
