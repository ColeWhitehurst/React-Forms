import { useState } from 'react';

const SignUpForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    // const [inputValue, setInputValue] = useState("");

    // function RequiredFieldForm() {
    //     const handleInputChange = (e) => {
    //         const value = e.target.value;
    //         setInputValue(value);
        
    //         // Validate if the input is not empty
    //         if (!value.trim()) {
    //           setError('This field is required.');
    //         } else {
    //           setError('');
    //         }
    //       };
    // }

   

    async function handleSubmit(e) {
        e.preventDefault();
        if (!username && !password) {
         setError('This field is required.');
         console.error(error);
         
        } 
        console.log("Hit submit");
        


        try {
            console.log(username);
            
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            });
            const result = await response.json();
            setToken(result.token);
            setUsername("");
            setPassword("");
            
        } catch (error) {
            setError(error.message);
        }
    }


    return ( 
       <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input value={username} placeholder="Enter Your Username" onChange={(e) => setUsername(e.target.value)} required/><br />
            </label><br />
            <label>
                Password:{" "}
                <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" required/><br />
            </label><br />
            <button>Submit</button>
        </form>
       </>
     );
}
 
export default SignUpForm;