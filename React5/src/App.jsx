import './App.css'
import Lottery from './Lottery.jsx'
import { sum } from "./helper.js"

function App() {
  let winCondition = (arr) => {
    return arr[0] === 0;
  };

  return (
    <>
      <Lottery n = {3} winCondition = {winCondition}/>
    </>
  )
}

export default App;

// let winCondition = () => {
  //   return sum(ticket) === 15;
  // }

  // let winCondition = () => {
  //   return Ticket.every((num) => num === ticket[0]);
  // };