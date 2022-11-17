import { useState } from 'react';

const Bloom = ({settings, updateSettings}) => {
    const { temperature, max_new_tokens_enabled, max_new_tokens, top_p_enabled, top_p, repetition_penalty_enabled, repetition_penalty, do_sample } = settings;
    // const [temperature, setTemperature] = useState(1);
    // const [max_new_tokens_enabled, setmax_new_tokens_enabled] = useState(false);
    // const [max_new_tokens, setmax_new_tokens] = useState(128);
    // const [top_p_enabled, settop_p_enabled] = useState(false);
    // const [top_p, settop_p] = useState(1);
    // const [repetition_penalty_enabled, setrepetition_penalty_enabled] = useState(false);
    // const [repetition_penalty, setrepetition_penalty] = useState(0);
    // const [do_sample, setdo_sample] = useState(true);

    const updateSingleSetting = (update) => {
        updateSettings({ ...settings, ...update });
    }

    return (
        <>
            <h3 className="font-bold text-lg pl-1">Bloom Options</h3>
            <label className="label" htmlFor="bloom-temp">
                <span className="label-text-lg">Temperature</span>
            </label>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={temperature} className="range range-primary w-5/6" step="0.01" id="bloom-temp" onChange={(e) => { updateSingleSetting({ temperature: +e.target.value }); }} /><span className="input w-max h-min p-2 bg-base-200">{temperature}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="bloom-max-len-toggle">
                    <span className="label-text-lg pt-4">Maximum Length</span>
                </label>
                <input type="checkbox" checked={max_new_tokens_enabled} className="toggle toggle-accent mb-2 ml-1" id="bloom-max-len-toggle" onChange={(e) => { updateSingleSetting({max_new_tokens_enabled: e.target.checked}); }}/>
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="1" max="250" value={max_new_tokens} className="range range-primary w-5/6 disabled:opacity-25" step="1" id="bloom-max-len" onChange={(e) => { updateSingleSetting({ max_new_tokens: +e.target.value }); }} disabled={!max_new_tokens_enabled} /><span className="input w-max h-min p-2 bg-base-200">{max_new_tokens}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="bloom-top-p-toggle">
                    <span className="label-text-lg pt-4">Top P</span>
                </label>
                <input type="checkbox" checked={top_p_enabled} className="toggle toggle-accent mb-2 ml-1" id="bloom-top-p-toggle" onChange={(e) => { updateSingleSetting({top_p_enabled: e.target.checked}); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="1" value={top_p} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="bloom-top-p" onChange={(e) => { updateSingleSetting({ top_p: +e.target.value }); }} disabled={!top_p_enabled} /><span className="input w-max h-min p-2 bg-base-200">{top_p}</span>
            </div>
            <div className="flex flex-row items-end">
                <label className="label" htmlFor="bloom-rep-pen-toggle">
                    <span className="label-text-lg pt-4">Repetition Penalty</span>
                </label>
                <input type="checkbox" checked={repetition_penalty_enabled} className="toggle toggle-accent mb-2 ml-1" id="bloom-rep-pen-toggle" onChange={(e) => { updateSingleSetting({repetition_penalty_enabled: e.target.checked}); }} />
            </div>
            <div className="flex flex-row items-center gap-4">
                <input type="range" min="0" max="100" value={repetition_penalty} className="range range-primary w-5/6 disabled:opacity-25" step="0.01" id="bloom-rep-pen" onChange={(e) => { updateSingleSetting({repetition_penalty: +e.target.value}); }} disabled={!repetition_penalty_enabled} /><span className="input w-max h-min p-2 bg-base-200">{repetition_penalty}</span>
            </div>
            <div className="flex flex-row items-end gap-1">
                <label className="label" htmlFor="bloom-do-sample-toggle">
                    <span className="label-text-lg pt-4">Do Sample (Greedy if off)</span>
                </label>
                <input type="checkbox" checked={do_sample} className="toggle toggle-accent mb-2" id="bloom-do-sample-toggle" onChange={(e) => { updateSingleSetting({do_sample: e.target.checked}); }} />
            </div>
        </>
    )
}

export default Bloom;