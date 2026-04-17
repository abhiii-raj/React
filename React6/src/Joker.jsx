import { useState, useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async () => {
        let result = await fetch(URL);
        let jsonResponse = await result.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }

    useEffect(() => { // not advisable to directly pass the async function
        const getFirstJoke = async () =>{
        let result = await fetch(URL);
        let jsonResponse = await result.json();
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }; 
    getFirstJoke();
}, []);

    return (
        <div>
            <h1>Joker !</h1>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}