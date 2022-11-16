import { useState } from 'react';

const GPTJ = ({settings, updateSettings}) => {
    const { temperature, maxLengthEnabled, maxLength, topPEnabled, topP, repetitionPenaltyEnabled, repetitionPenalty, doSample } = settings;
    // const [temperature, setTemperature] = useState(1);
    // const [maxLengthEnabled, setMaxLengthEnabled] = useState(false);
    // const [maxLength, setMaxLength] = useState(128);
    // const [topPEnabled, setTopPEnabled] = useState(false);
    // const [topP, setTopP] = useState(1);
    // const [repetitionPenaltyEnabled, setRepetitionPenaltyEnabled] = useState(false);
    // const [repetitionPenalty, setRepetitionPenalty] = useState(0);
    // const [doSample, setDoSample] = useState(true);

    const updateSingleSetting = (update) => {
        updateSettings({ ...settings, ...update });
    }

    return (
        <>
            <label className="label" htmlFor="gptj-temp">
                <span className="label-text-lg">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={temperature} className="range range-primary w-5/6" step="0.01" id="gptj-temp" onChange={(e) => { updateSingleSetting({ temperature: +e.target.value }); }} /><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptj-max-len-toggle">
                    <span className="label-text-lg pt-4">Maximum Length</span>
                </label>
                <input type="checkbox" checked={maxLengthEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptj-max-len-toggle" onChange={(e) => { updateSingleSetting({maxLengthEnabled: e.target.checked}); }}/>
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="1" max="250" value={maxLength} className="range range-primary w-5/6 disabled:opacity-25" step="1" id="gptj-max-len" onChange={(e) => { updateSingleSetting({ maxLength: +e.target.value }); }} disabled={!maxLengthEnabled} /><span className="input w-max h-min p-2 bg-base-200">{maxLength}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptj-top-p-toggle">
                    <span className="label-text-lg pt-4">Top P</span>
                </label>
                <input type="checkbox" checked={topPEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptj-top-p-toggle" onChange={(e) => { updateSingleSetting({topPEnabled: e.target.checked}); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={topP} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="gptj-top-p" onChange={(e) => { updateSingleSetting({ topP: +e.target.value }); }} disabled={!topPEnabled} /><span className="input w-max h-min p-2 bg-base-200">{topP}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="gptj-rep-pen-toggle">
                    <span className="label-text-lg pt-4">Repetition Penalty</span>
                </label>
                <input type="checkbox" checked={repetitionPenaltyEnabled} className="toggle toggle-accent mb-2 ml-1" id="gptj-rep-pen-toggle" onChange={(e) => { updateSingleSetting({repetitionPenaltyEnabled: e.target.checked}); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={repetitionPenalty} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="gptj-rep-pen" onChange={(e) => { updateSingleSetting({repetitionPenalty: +e.target.value}); }} disabled={!repetitionPenaltyEnabled} /><span className="input w-max h-min p-2 bg-base-200">{repetitionPenalty}</span>
            </div>
            <div className="flex flex-row items-end gap-1">
                <label className="label" htmlFor="gptj-do-sample-toggle">
                    <span className="label-text-lg pt-4">Do Sample (Greedy if off)</span>
                </label>
                <input type="checkbox" checked={doSample} className="toggle toggle-accent mb-2" id="gptj-do-sample-toggle" onChange={(e) => { updateSingleSetting({doSample: e.target.checked}); }} />
            </div>
        </>
    )
}

export default GPTJ;