import { useEffect, useState } from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    useEffect(() => {
        document.title = `Count : ${count} ${color}`;
    } );

    function addCount(){
        setCount(count => count + 1)
    }
    function subtractCount(){
        setCount(count => count - 1)
    }
    function changeColor(){
        setColor(color => color === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>

    </>)
}

export default MyComponent;