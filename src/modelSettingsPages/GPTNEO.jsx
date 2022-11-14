import { useState } from 'react';

const GPTNEO = () => {
    const [temperature, setTemperature] = useState(1);
    const [maxLengthEnabled, setMaxLengthEnabled] = useState(false);
    const [maxLength, setMaxLength] = useState(128);
    const [topPEnabled, setTopPEnabled] = useState(false);
    const [topP, setTopP] = useState(1);
    const [repetitionPenaltyEnabled, setRepetitionPenaltyEnabled] = useState(false);
    const [repetitionPenalty, setRepetitionPenalty] = useState(0);
    const [doSample, setDoSample] = useState(true);

    return (
        <>
            <label className="label" htmlFor="gptneo-temp">
                <span className="label-text-lg">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={temperature} className="range range-primary w-5/6" step="0.01" id="gptneo-temp" onChange={(e) => { setTemperature(+e.target.value); }} /><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptneo-max-len-toggle">
                    <span className="label-text-lg pt-4">Maximum Length</span>
                </label>
                <input type="checkbox" checked={maxLengthEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptneo-max-len-toggle" onChange={(e) => { setMaxLengthEnabled(e.target.checked); }}/>
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="1" max="250" value={maxLength} className="range range-primary w-5/6 disabled:opacity-25" step="1" id="gptneo-max-len" onChange={(e) => { setMaxLength(+e.target.value); }} disabled={!maxLengthEnabled} /><span className="input w-max h-min p-2 bg-base-200">{maxLength}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptneo-top-p-toggle">
                    <span className="label-text-lg pt-4">Top P</span>
                </label>
                <input type="checkbox" checked={topPEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptneo-top-p-toggle" onChange={(e) => { setTopPEnabled(e.target.checked); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={topP} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="gptneo-top-p" onChange={(e) => { setTopP(+e.target.value); }} disabled={!topPEnabled} /><span className="input w-max h-min p-2 bg-base-200">{topP}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptneo-rep-pen-toggle">
                    <span className="label-text-lg pt-4">Repetition Penalty</span>
                </label>
                <input type="checkbox" checked={repetitionPenaltyEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptneo-rep-pen-toggle" onChange={(e) => { setRepetitionPenaltyEnabled(e.target.checked); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={repetitionPenalty} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="gptneo-rep-pen" onChange={(e) => { setRepetitionPenalty(+e.target.value); }} disabled={!repetitionPenaltyEnabled} /><span className="input w-max h-min p-2 bg-base-200">{repetitionPenalty}</span>
            </div>
            <div className="flex flex-row items-end gap-1">
                <label className="label" htmlFor="gptneo-do-sample-toggle">
                    <span className="label-text-lg pt-4">Do Sample (Greedy if off)</span>
                </label>
                <input type="checkbox" checked={doSample} className="toggle toggle-accent mb-2" id="gptneo-do-sample-toggle" onChange={(e) => { setDoSample(e.target.checked); }} />
            </div>
        </>
    )
}

export default GPTNEO;