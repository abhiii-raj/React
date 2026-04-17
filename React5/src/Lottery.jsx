import { useState } from "react";
import Ticket from "./Ticket";
import { generateTicket, sum } from "./helper";


export default function Lottery({n= 3, winCondition}) {
    let [arr, setArr] = useState(generateTicket(n));

    // let isWinningSum  = winningSum === sum;
    let isWinningSum = winCondition;

    let buyTicket = () => {
        setArr(generateTicket(n));
    }

    return (
        <>
            <h1>Lottery Game</h1>
            <Ticket arr={arr} />
            &nbsp;
            <span>
                <button onClick={buyTicket}>BuyTicket</button>
            </span>
            &nbsp;
            {!isWinningSum ? <h2>"Bingo"</h2> : null}
        </>
    )
}



// import { useState } from "react";
// import { generateTicket, sumTicket} from "./helper.js";
// import Ticket from "./Ticket";

// export default function lottery({sum}) {
//     let [arr, setArr] = useState([0,0,0]);

//     let handleGenerate = () => {
//         setArr(generateTicket(3));
//     }

//     let isWinning = sumTicket(arr) === sum;

//     return (
//         <div>
//             <h1>Lottery Game!</h1>
//             <h2>
//                 <span> {arr[0]} </span>
//                 &nbsp;
//                 <span> {arr[1]} </span>
//                 &nbsp;
//                 <span> {arr[2]} </span>
//             </h2>
//             <button onClick={handleGenerate}>Buy new Ticket</button>
//             { !isWinning ? <h1>Better Luck ! Try again {}</h1> : <h1>BINGO !!!</h1>}
//         </div>
//     )
// }
