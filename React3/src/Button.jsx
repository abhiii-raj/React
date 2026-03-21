import "./Button.css"

function printHello(){
    console.log("Hello...");
}

function printBye(){
    console.log("bye...");
}
export default function Button(){
    return (
        <div className="container">
            <button onClick = {printHello}>Click me</button>
            <p onClick={printBye}>This is a pragraph for the event demo</p>
        </div>
        
    )
}