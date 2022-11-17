import React from 'react';

const ModelResponse = ({ color, text, editable, setEditable }) => {
    return (
        // <input defaultValue={text} className={`${color} w-min outline-none bg-inherit`}/>
        // <span className={`${color}`} contentEditable={editable} onMouseDown={(e) => setEditable(true)} >{text}</span>
        // <span className={`${color} outline-none`} contentEditable={editable} onInput={(e) => { if (e.target.innerText == text) {e.target.classList.add(color)} else {e.target.classList.remove(color)}}}>{text}</span>
        <>
            {
                text.split(" ").map((word, index) => {
                    let newText = index > 0 ? " " + word : word;
                    return <span key={index} className={`${color} outline-none`} contentEditable={editable} onInput={(e) => { if (e.target.innerText == newText) {e.target.classList.add(color)} else {e.target.classList.remove(color)}}}>{newText}</span>
                    return <span className={`${color}`} key={index}>{index > 0 ? " " + word : word}</span>
                })
            }
        </>
    )
}

export default ModelResponse;