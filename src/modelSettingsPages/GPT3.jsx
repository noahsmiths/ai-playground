import { useState } from 'react';

const GPT3 = () => {
    const [temperature, setTemperature] = useState(0.7);
    const [maxLength, setMaxLength] = useState(256);
    const [topP, setTopP] = useState(1);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0);
    const [presencePenalty, setPresencePenalty] = useState(0);

    return (
        <>
            <label className="label" htmlFor="gpt3-model">
                <span className="label-text-lg">Model</span>
            </label>
            <select className="select select-primary w-full" id="gpt3-model">
                <option value="text-davinci-002">text-davinci-002</option>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-babbage-001">text-babbage-001</option>
                <option value="text-ada-001">text-ada-001</option>
            </select>
            <label className="label" htmlFor="gpt3-temp">
                <span className="label-text-lg pt-4">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={temperature} className="range range-primary w-5/6" step="0.01" id="gpt3-temp" onChange={(e) => { setTemperature(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
            <label className="label" htmlFor="gpt3-max-len">
                <span className="label-text-lg pt-4">Maximum Length</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="1" max="2048" value={maxLength} className="range range-primary w-5/6" step="1" id="gpt3-max-len" onChange={(e) => { setMaxLength(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{maxLength}</span>
            </div>
            <label className="label" htmlFor="gpt3-top-p">
                <span className="label-text-lg pt-4">Top P</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={topP} className="range range-primary w-5/6" step="0.01" id="gpt3-top-p" onChange={(e) => { setTopP(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{topP}</span>
            </div>
            <label className="label" htmlFor="gpt3-freq-pen">
                <span className="label-text-lg pt-4">Frequency Penalty</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="2" value={frequencyPenalty} className="range range-primary w-5/6" step="0.01" id="gpt3-freq-pen" onChange={(e) => { setFrequencyPenalty(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{frequencyPenalty}</span>
            </div>
            <label className="label" htmlFor="gpt3-presence-pen">
                <span className="label-text-lg pt-4">Presence Penalty</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="2" value={presencePenalty} className="range range-primary w-5/6" step="0.01" id="gpt3-presence-pen" onChange={(e) => { setPresencePenalty(+e.target.value); }}/><span className="input w-max h-min p-2 bg-base-200">{presencePenalty}</span>
            </div>
        </>
    )
}

export default GPT3;