import { useState } from 'react';

const GPT3 = ({settings, updateSettings}) => {
    const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty } = settings;
    // const [temperature, setTemperature] = useState(0.7);
    // const [max_tokens, setmax_tokens] = useState(256);
    // const [top_p, settop_p] = useState(1);
    // const [frequency_penalty, setfrequency_penalty] = useState(0);
    // const [presence_penalty, setpresence_penalty] = useState(0);

    const updateSingleSetting = (update) => {
        updateSettings({ ...settings, ...update });
    }

    return (
        <>
            <h3 className="font-bold text-lg pl-1">GPT-3 Options</h3>
            <label className="label" htmlFor="gpt3-model">
                <span className="label-text-lg">Model</span>
            </label>
            <select className="select select-primary w-full" id="gpt3-model" value={model} onChange={(e) => { updateSingleSetting({ model: e.target.value }); }}>
                <option value="text-davinci-002">text-davinci-002</option>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-babbage-001">text-babbage-001</option>
                <option value="text-ada-001">text-ada-001</option>
            </select>
            <label className="label" htmlFor="gpt3-temp">
                <span className="label-text-lg pt-4">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={temperature} className="range range-primary w-5/6" step="0.01" id="gpt3-temp" onChange={(e) => { updateSingleSetting({ temperature: +e.target.value }); }}/><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
            <label className="label" htmlFor="gpt3-max-len">
                <span className="label-text-lg pt-4">Maximum Length</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="1" max="2048" value={max_tokens} className="range range-primary w-5/6" step="1" id="gpt3-max-len" onChange={(e) => { updateSingleSetting({ max_tokens: +e.target.value }); }}/><span className="input w-max h-min p-2 bg-base-200">{max_tokens}</span>
            </div>
            <label className="label" htmlFor="gpt3-top-p">
                <span className="label-text-lg pt-4">Top P</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={top_p} className="range range-primary w-5/6" step="0.01" id="gpt3-top-p" onChange={(e) => { updateSingleSetting({ top_p: +e.target.value }); }}/><span className="input w-max h-min p-2 bg-base-200">{top_p}</span>
            </div>
            <label className="label" htmlFor="gpt3-freq-pen">
                <span className="label-text-lg pt-4">Frequency Penalty</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="2" value={frequency_penalty} className="range range-primary w-5/6" step="0.01" id="gpt3-freq-pen" onChange={(e) => { updateSingleSetting({ frequency_penalty: +e.target.value }); }}/><span className="input w-max h-min p-2 bg-base-200">{frequency_penalty}</span>
            </div>
            <label className="label" htmlFor="gpt3-presence-pen">
                <span className="label-text-lg pt-4">Presence Penalty</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="2" value={presence_penalty} className="range range-primary w-5/6" step="0.01" id="gpt3-presence-pen" onChange={(e) => { updateSingleSetting({ presence_penalty: +e.target.value }); }}/><span className="input w-max h-min p-2 bg-base-200">{presence_penalty}</span>
            </div>
        </>
    )
}

export default GPT3;