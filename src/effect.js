import { useEffect, useState } from "react";

function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        <h1>'You clicked ${count} times`</h1>;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
        <button onClick={() =>setCount(count + 1)}>
        </button>
    </div>
    );
    }

export default Effect;
