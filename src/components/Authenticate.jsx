import { useState } from 'react';


const Authenticate = ({ token }) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");
    
    console.log(token);
    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                // method: "GET",
                headers: {"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            setSuccessMessage(result.message);
            setUsername(result.data.username);

        } catch (error) {
            setError(error.message);
        }
    }

    return ( 
        <>
            <h2>Authenticate</h2>
            {username && <p>{`Hi ${username}`}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick} >Authenticate Token</button>
        </>
        
     );
}
 
export default Authenticate;