import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export function CallbackHook() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback((value) => {
        setCount((c) => c + value);
    }, []);

    return (
        <div>
            <p>Contador: {count}</p>
            <hr />
            <ShowIncrement increment={handleClick} />
        </div>
    );
}