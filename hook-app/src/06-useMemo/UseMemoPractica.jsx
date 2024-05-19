import { useMemo, useState } from "react";

export const UseMemoPractica = () => {

    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        // Cálculo costoso
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>El resultado del cálculo es: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}
