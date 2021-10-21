import { useState } from "react";

function Count() {
    //Declare a new state variable, which we will call "count".
    const [count, setCount] = useState(0)
    return (
        <div style={{ textAlign: "center", padding: "5%", color: "white", background: "red" }}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                ADD
            </button>
            <button onClick={() => setCount(count - 1)}>
                Remove
            </button>
        </div>
    );
}

export default Count;