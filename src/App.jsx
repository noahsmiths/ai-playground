import { useState } from 'react'

const App = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [temperature, setTemperature] = useState(0.7);
    const [maxLength, setMaxLength] = useState(256);

    return (
        <div id="root" className="grid grid-span-rows grid-cols-12 gap w-screen h-screen">
            <div contentEditable="true" className="transition-all bg-base-200 border hover:border-primary focus:border-primary-focus col-span-9 m-2 rounded p-2 outline-none">

            </div>
            <div className="flex flex-col col-span-3 mt-2 mb-2 pr-2 w-full">
                <div className="flex flex-row justify-evenly tabs tabs-boxed w-full mb-2">
                    <a className={`transition-all w-1/4 tab ${activeTab === 1 && 'tab-active'}`} onClick={() => { setActiveTab(1); }}>GPT-3</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 2 && 'tab-active'}`} onClick={() => { setActiveTab(2); }}>GPT-NEO</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 3 && 'tab-active'}`} onClick={() => { setActiveTab(3); }}>GPT-J</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 4 && 'tab-active'}`} onClick={() => { setActiveTab(4); }}>Bloom</a>
                </div>

                <div id="gpt-3" className={`flex flex-col h-full w-full border rounded bg-base-200 p-4 overflow-auto ${activeTab !== 1 && 'hidden'}`}>
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
                        <input type="range" min="0" max="1" value={temperature} className="range range-primary w-5/6" step="0.01" id="gpt3-temp" onChange={(e) => { setTemperature(e.target.value); }}/><span className="input w-1/6 h-min p-2 bg-base-200">{temperature}</span>
                    </div>
                    <label className="label" htmlFor="gpt3-max-len">
                        <span className="label-text-lg pt-4">Maximum Length</span>
                    </label>
                    <div className="flex flex-row items-center gap-4">
                        <input type="range" min="1" max="2048" defaultValue={maxLength} className="range range-primary w-5/6" step="1" id="gpt3-max-len" onChange={(e) => { setMaxLength(e.target.value); }}/><span className="input w-1/6 h-min p-2 bg-base-200">{maxLength}</span>
                    </div>
                </div>

                <div id="gpt-neo" className={`h-full w-full border ${activeTab !== 2 && 'hidden'}`}>
                    GPT-NEO Settings
                </div>

                <div id="gpt-j" className={`h-full w-full border ${activeTab !== 3 && 'hidden'}`}>
                    GPT-J Settings
                </div>

                <div id="bloom" className={`h-full w-full border ${activeTab !== 4 && 'hidden'}`}>
                    Bloom Settings
                </div>

                <div className="flex flex-row mt-2 justify-evenly w-full">
                    <button className="btn btn-primary w-5/12">Query all</button><button className="btn btn-primary w-5/12">Query only selected model</button>
                </div>
            </div>
        </div>
    )
}

export default App;
