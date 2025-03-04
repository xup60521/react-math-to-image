import { useState } from "react";
import "./App.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["$$", "$$"]],
        processEscapes: true,
        processEnvironments: true,
    },
    startup: {
        typeset: true,
    },
};

export default function App() {
    const [input, setInput] = useState("");
    const [size, setSize] = useState(1);
    return (
        <div className="w-screen h-screen flex flex-col items-center gap-12 pt-[30vh]">
            <h1 className="text-6xl font-mono">Math To Image</h1>
            <div className="w-2/3 max-w-[30rem] flex flex-col items-center gap-4">
                <input
                    placeholder="enter math"
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    className="min-w-0 flex-grow h-full border-slate-600 w-full border-b-2 px-4 p-1"
                ></input>
                <div className="flex justify-center gap-2">
                    <button
                        onMouseDown={() => setSize((e) => e + 1)}
                        className="bg-black rounded-md cursor-pointer text-white size-6"
                    >
                        +
                    </button>
                    <button
                        onMouseDown={() => setSize((e) => e - 1)}
                        className="bg-black rounded-md cursor-pointer text-white size-6"
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center h-16">
                <MathJaxContext config={config}>
                    <MathJax
                        style={{ fontSize: `${size}rem` }}
                    >{`\\( ${input} \\)`}</MathJax>
                </MathJaxContext>
            </div>
        </div>
    );
}
