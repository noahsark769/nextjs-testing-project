import * as React from "react";

export const Heading1 = (props) => {
    const [word, setWord] = React.useState("A")
    return <div>
        <h1>Heading Selected: {word}</h1>
        <button onClick={() => setWord("A")}>Set A</button>
        <button onClick={() => setWord("B")}>Set B</button>
    </div>;
}