import { useEffect, useState } from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Count : ${count}`;
    } );

    function addCount(){
        setCount(count => count + 1)
    }
    function subtractCount(){
        setCount(count => count - 1)
    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>

    </>)
}

export default MyComponent;