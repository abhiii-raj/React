// import House from "./House"
import { useState } from "react";

export default function LudoBoard(){
    let [move, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
    let [arr, setArr] = useState("no moves ");

    let handleBlue = () => {
        setMoves((prevVal) => {
            return {...prevVal, blue: prevVal.blue +1};
        });
        
        setArr((prevArr) => {
            return [...prevArr, "blue "];
        });
    }
    let handleRed = () => {
        setMoves((prevVal) =>{
            return {...prevVal, red: prevVal.red + 1};
        });
        setArr((prevArr) => {
            return [...prevArr, "red "];
        })
    }

    function handleGreen(){
        setMoves((prevVal) =>{
            return {...prevVal, green: prevVal.green + 1};
        });
        setArr((prevArr) => {
            return [...prevArr, "green "];
        });
    }

    function handleYellow(){
        setMoves((prevVal) =>{
            return {...prevVal, yellow: prevVal.yellow + 1};
        });
        setArr((prevArr) => {
            return [...prevArr, "yellow "];
        });
    }
    
    return (
        <div>
            <h1>Game Begins </h1>
            <h2>Blue Moves: {move.blue}</h2>
            <button onClick={handleBlue} style={{backgroundColor: "blue"}}>+1</button>
            <br />
            <h2>Red Moves: {move.red}</h2>
            <button onClick={handleRed } style={{backgroundColor: "red"}}>+1</button>
            <br />
            <h2>Green Moves: {move.green}</h2>
            <button onClick={handleGreen} style ={{backgroundColor: "green"}}>+1</button>
            <br />
            <h2>Yellow Moves: {move.yellow}</h2>
            <button onClick={handleYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
            <p>The array is: {arr}</p>
        </div>
    )
}