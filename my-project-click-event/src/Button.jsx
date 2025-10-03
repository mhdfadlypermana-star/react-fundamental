function Button() {
    const handleClick = (e) => e.target.textContent = "Bajingan 😡";
    
 
  return <button onDoubleClick={(e) => handleClick(e)}>Click me </button>;
}

export default Button;
