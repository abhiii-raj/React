import "./HelloMessage.css";

function HelloMessage({ username, color }) {
    let styles = {backgroundColor: color};
    return (
        <div className="greet" style={styles}>
            <h2>Hello, {username} </h2>
            <h3> Hope You are doing well !!! </h3>
        </div>
    )
}

export default HelloMessage;