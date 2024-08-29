import "./App.css";
import {React, useState } from "react";

function App() {
    const [candidateName, setCandidateName] = useState("");
   // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
     
    const [address, setAddress] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            candidateName,
          //  lastName,
            email,
            contact,
            gender,
            
            address
        );
        setCandidateName("");
        // setLastName("");
         setEmail("");
         setContact("");
         setGender("");
         
         setAddress("");
         
    };

    
    const handleReset = () => {
        // Reset all state variables here
        setCandidateName("");
       // setLastName("");
        setEmail("");
        setContact("");
        setGender("");
        
        setAddress("");
    };

    return (
        <div className="App">
            <h1>Personal Information</h1>
            <fieldset> 
                <form action="#" method="get">
                  <div className="onebox">
                    <label for="candidatename">
                        Candidate Name*
                    </label>
                    <input
                        type="text"
                        name="candidatename"
                        id="candidatename"
                        value={candidateName}
                        onChange={(e) =>
                            setCandidateName(e.target.value)
                        }
                        placeholder="Enter candidate Name"
                        required
                    />
                    
                    </div>
                    <label for="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    <label for="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number" 
                        maxlength="10" pattern="[1-9]{1}[0-9]{9}"
                        required
                    />
                    <label for="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                     
                     
                    <label for="address">Enter Your Address</label>
                    <textarea
                        name="address"
                        id="address"
                        cols="30"
                        rows="1"
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                        placeholder="Enter Your address "
                        required
                    ></textarea>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
 