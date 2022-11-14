import { useState } from 'react';

const GPTJ = () => {
    const [temperature, setTemperature] = useState(0.7);
    
    return (
        <>
            <label className="label" htmlFor="gpt3-temp">
                <span className="label-text-lg pt-4">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={temperature} className="range range-primary w-5/6" step="0.01" id="gpt3-temp" onChange={(e) => { setTemperature(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
        </>
    )
}

export default GPTJ;