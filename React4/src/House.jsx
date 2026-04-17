import { useState } from "react"

function init(){
    return 0;
}

export default function House({color}){
    let [count, setCount] = useState(init);
    
    let text = color == "yellow" ? "black" : "yellow";

    let handleClick = ()=> {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{color} moves : {count}</p>
            <button onClick ={handleClick} style={{backgroundColor: color, color: text}}>+1</button>
        </div>
    )
}