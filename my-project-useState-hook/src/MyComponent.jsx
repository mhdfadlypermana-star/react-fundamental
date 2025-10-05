import React,{useState} from "react"

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed , setIsEmployed] = useState(false);
    
    const updateName = () => {
        setName("Spongebob");
    console.log(name);
    }

    const updateAge = () => {
        setAge(age + 2);
    }

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed);
    }
    

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={updateAge}>How Old Are You</button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateIsEmployed}>Check Employed</button>
        </div>
    );
}

export default MyComponent