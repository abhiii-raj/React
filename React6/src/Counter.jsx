import {useState, useEffect} from "react";
// import "./Counter.css"; 

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let handleCountx = () =>{
        setCountx(currCount => currCount + 1);
    };

    let handleCounty = () =>{
        setCounty(currCount => currCount + 1);
    };

    useEffect(function sideEffect() {
        console.log("this is side effect..")
    }, [countx, county]);

    return (
        <div className="container">
            <h2>countx is : {countx}</h2>
            <button onClick={handleCountx}>Count++</button>
            <h2>county is : {county}</h2>
            <button onClick={handleCounty}>Count++</button>
        </div>
    )
}