import { useState } from "react";

function MyComponent(){

    const [name ,setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment ,setComment] = useState("");
    const [payment ,setPayment] = useState("");
    const [shipping , setShipping] = useState("Delivery");
    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    } 

    function handleComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleshipping(event){
        setShipping(event.target.value);
    }

    

    

    return(
        <>

        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment}
            placeholder="Enter for delivery" />
            <p>Comment: {comment} </p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Indomaret">Indomaret</option>
                <option value="Alfamart">Alfamart</option>
                <option value="Virtual-Acount">Virtual Account</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                 checked={shipping === "Pick Up"} 
                 onChange={handleshipping} />
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery"
                 checked={shipping === "Delivery"} 
                 onChange={handleshipping} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>

        </>
    )
}

export default MyComponent