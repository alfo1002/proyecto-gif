const newMessage = {
    message: 'Hola Mundo',
    title: 'Walter Dev'
}

const getResult = (a, b) => {
    return a + b;
}

export function FirstApp() {
    return (
        <>
            <h1>Props: </h1>
            <h1>First App</h1>
            <h1>Paul</h1>
            <hr></hr>
            <h1>{JSON.stringify(newMessage)}</h1>
            <hr></hr>
            <h1>{getResult(1, 2)}</h1>
        </>
    )
}