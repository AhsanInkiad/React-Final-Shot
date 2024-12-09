import { useState } from "react";

export function Counter({ name }) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className="text-center">
                {name}
            </div>
            <div className="flex gap-3">
                <button onClick={() => setCount(c => c - 1)}>-</button>
                {count}
                <button onClick={() => setCount(c => c + 1)}>+</button>
            </div>
        </div>
    )
}