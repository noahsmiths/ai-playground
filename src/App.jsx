import { useState } from 'react';
import GPT3 from './modelSettingsPages/GPT3';
import GPTNEO from './modelSettingsPages/GPTNEO';
import GPTJ from './modelSettingsPages/GPTJ';
import Bloom from './modelSettingsPages/Bloom';

const App = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div id="root" className="grid grid-span-rows grid-cols-12 gap w-screen h-screen">
            <div contentEditable="true" className="transition-all bg-base-200 border hover:border-primary focus:border-primary-focus col-span-8 m-2 rounded p-2 outline-none">

            </div>
            <div className="flex flex-col col-span-4 mt-2 mb-2 pr-2 w-full">
                <div className="flex flex-row justify-evenly tabs tabs-boxed w-full mb-2 border">
                    <a className={`transition-all w-1/4 tab ${activeTab === 1 && 'tab-active'}`} onClick={() => { setActiveTab(1); }}>GPT-3</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 2 && 'tab-active'}`} onClick={() => { setActiveTab(2); }}>GPT-NEO</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 3 && 'tab-active'}`} onClick={() => { setActiveTab(3); }}>GPT-J</a>
                    <a className={`transition-all w-1/4 tab ${activeTab === 4 && 'tab-active'}`} onClick={() => { setActiveTab(4); }}>Bloom</a>
                </div>

                <div className="flex flex-col h-full w-full border rounded bg-base-200 p-4 overflow-auto">
                    { activeTab === 1 && <GPT3 /> }
                    { activeTab === 2 && <GPTNEO /> }
                    { activeTab === 3 && <GPTJ /> }
                    { activeTab === 4 && <Bloom /> }
                </div>

                <div className="flex flex-row mt-2 justify-evenly w-full">
                    <button className="btn btn-primary w-5/12">Query all</button><button className="btn btn-primary w-5/12">Query only selected model</button>
                </div>
            </div>
        </div>
    )
}

export default App;
